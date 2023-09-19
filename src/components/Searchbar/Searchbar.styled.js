import styled from 'styled-components';

export const HeaderSearchbar = styled('header')(() => {
  return {
    top: '0px',
    left: '0px',
    position: 'sticky',
    zIndex: '1100',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '64px',
    paddingRight: '24px',
    paddingLeft: '24px',
    paddingTop: '12px',
    paddingBottom: '12px,',
    color: '#fff',
    backgroundColor: '#3f51b5',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2) 0px 4px 5px 0px rgba(0, 0, 0, 0.14)  0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    marginBottom: '15px',
  };
});

export const SearchForm = styled('form')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    borderRadius: '3px',
    overflow: 'hidden',
  };
});

export const ButtonSearchForm = styled('button')(() => {
  return {
    display: 'inline-block',
    width: '48px',
    height: '48px',
    border: '0px',
    opacity: '0.6',
    transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': { opacity: '1' },
  };
});

export const SearchFormButtonLabel = styled('span')(() => {
  return {
    padding: '0px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0px',
  };
});

export const SearchFormInput = styled('input')(() => {
  return {
    display: 'inline-block',
    width: '100%',
    font: 'inherit',
    fontSize: '20px',
    border: 'none',
    outline: 'none',
    paddingLeft: '4px',
    paddingRight: '4px',
    '&::placeholder': { font: 'inherit', fontSize: '18px' },
  };
});
