import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import images from '../data/images.json';

export class App extends Component {
  state = {
    hits: images,
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ImageGallery images={this.state.hits} />
      </div>
    );
  }
}

export default App;
