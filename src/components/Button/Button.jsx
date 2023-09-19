import { DButton, DivContainer } from 'components/Button/Button.styled';

const Button = ({ onClick, totalHits, showBtn }) => {
  return (
    !showBtn &&
    totalHits.length > 0 && (
      <DivContainer>
        <DButton type="button" onClick={onClick}>
          Load more
        </DButton>
      </DivContainer>
    )
  );
};
export default Button;
