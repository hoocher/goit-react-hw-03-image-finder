import { ThreeDots } from 'react-loader-spinner';
import { DivContainer } from 'components/Button/Button.styled';

const Loader = ({ showLoader }) => {
  return (
    showLoader && (
      <DivContainer>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </DivContainer>
    )
  );
};

export default Loader;
