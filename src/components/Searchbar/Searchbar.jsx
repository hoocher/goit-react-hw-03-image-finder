import {
  HeaderSearchbar,
  SearchForm,
  ButtonSearchForm,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <HeaderSearchbar>
      <SearchForm onSubmit={onSubmit}>
        <ButtonSearchForm type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </ButtonSearchForm>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </HeaderSearchbar>
  );
};

export default Searchbar;
