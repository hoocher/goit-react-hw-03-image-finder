import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { getImagesApi } from 'api/pixabayApi';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    totalHits: null,
    hits: [],
    searchTag: null,
    page: 1,
    showLoader: false,
    showModal: false,
    modalItem: '',
  };

  async componentDidUpdate(_, prevState) {
    // OnSubmit
    if (this.state.searchTag !== prevState.searchTag) {
      this.setState({ showLoader: true });
      try {
        const data = await getImagesApi(this.state.searchTag, 1);
        if (data.hits.length === 0) {
          return Notify.failure('Find no images');
        }
        this.setState({
          hits: data.hits,
          totalHits: data.totalHits,
        });
      } catch ({ message }) {
        Notify.failure('Please try again later ', message);
      } finally {
        this.setState({
          showLoader: false,
        });
      }
    }

    //  Load More
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.setState({ showLoader: true });
      this.setState(() => {
        return {};
      });
      try {
        const data = await getImagesApi(this.state.searchTag, this.state.page);
        const newImages = [...this.state.hits, ...data.hits];
        this.setState({
          hits: newImages,
        });
      } catch ({ message }) {
        Notify.failure('Please try again later ', message);
      } finally {
        this.setState({
          showLoader: false,
        });
      }
    }
  }

  onSubmit = async e => {
    e.preventDefault();
    let String = e.target[1].value;
    let pattern = /^[\s]+$/;
    if (!e.target[1].value || pattern.test(String)) {
      return Notify.failure(
        'Please type serching tag or delete spase from begining'
      );
    }
    this.setState({
      searchTag: e.target[1].value,
      page: 1,
    });
  };

  loadMore = async () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  largeImageOpen = (largeURL, e) => {
    this.setState({
      showModal: true,
      modalItem: largeURL,
    });
  };

  closeModal = e => {
    if (e.target.src !== this.state.modalItem || e.code === 'Escape') {
      this.setState({ showModal: false });
    }
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.hits} onClick={this.largeImageOpen} />
        <Loader showLoader={this.state.showLoader} />
        {this.state.hits.length < this.state.totalHits && (
          <Button
            onClick={this.loadMore}
            totalHits={this.state.hits}
            showBtn={this.state.showLoader}
          />
        )}

        {showModal && (
          <Modal largeImg={this.state.modalItem} onClick={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
