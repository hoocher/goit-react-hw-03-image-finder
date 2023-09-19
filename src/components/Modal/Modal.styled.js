import styled from 'styled-components';

export const ModalBackdrop = styled('div')(() => {
  return {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  };
});

export const ModalWindow = styled('div')(() => {
  return {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
  };
});
