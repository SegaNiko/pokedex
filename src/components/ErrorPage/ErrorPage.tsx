import rocketTeam from '@img/rocket-team.png';
import { ErrorPageWrap, ErroTextBlack, ErrorBtn, ErrorImg, ErrorTextWhite, ErrorTextWrap, ErrorTitle } from './styles';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <ErrorPageWrap>
      <ErrorTitle>404</ErrorTitle>
      <ErrorImg src={rocketTeam} alt='Rocket Team' />
      <ErrorTextWrap>
        <ErrorTextWhite>The rocket team </ErrorTextWhite>
        <ErroTextBlack>has won this time.</ErroTextBlack>
      </ErrorTextWrap>
      <Link to='/'>
        <ErrorBtn>Go home</ErrorBtn>
      </Link>
    </ErrorPageWrap>
  );
};
