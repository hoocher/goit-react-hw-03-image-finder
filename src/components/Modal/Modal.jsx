import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalWindow } from './Modal.styled';

const modalR = document.querySelector('#modalRoot');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onClick);
  }

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.props.onClick} data-id="backdrop">
        <ModalWindow>
          <img src={this.props.largeImg} alt="this.props.children.tags" />
        </ModalWindow>
      </ModalBackdrop>,
      modalR
    );
  }
}
