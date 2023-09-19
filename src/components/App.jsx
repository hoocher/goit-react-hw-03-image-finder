import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { getImagesApi } from 'api/pixabayApi';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    modalIsOpen: false,
    hits: [],
    searchTag: null,
    page: 1,
    showLoader: false,
    showModal: false,
    modalItem: '',
  };

  onSubmit = async e => {
    this.setState({ showLoader: true });
    e.preventDefault();
    try {
      const data = await getImagesApi(e.target[1].value, 1);
      this.setState({
        searchTag: e.target[1].value,
        hits: data.hits,
      });
    } catch ({ message }) {
      console.error('Error');
    } finally {
      this.setState(prevState => {
        return { page: 2 };
      });
      this.setState({
        showLoader: false,
      });
    }
  };

  loadMore = async () => {
    this.setState({ showLoader: true });
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    try {
      const data = await getImagesApi(this.state.searchTag, this.state.page);
      const newImages = [...this.state.hits, ...data.hits];
      this.setState({ hits: newImages });
    } catch ({ message }) {
      console.error('Error');
    } finally {
      this.setState({
        showLoader: false,
      });
    }
  };

  largeImageOpen = (largeURL, e) => {
    this.setState({
      showModal: true,
      modalItem: largeURL,
    });
  };

  closeModal = e => {
    if (e.target.src !== this.state.modalItem) {
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
        <Button
          onClick={this.loadMore}
          totalHits={this.state.hits}
          showBtn={this.state.showLoader}
        />
        {showModal && (
          <Modal largeImg={this.state.modalItem} onClick={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
