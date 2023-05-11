import rocketTeam from '@img/rocket-team.png';
import { Img } from '@ui-kit';

import './index.scss';

export const ErrorPage = () => {
  return (
    <div className='error-page'>
      <div className='error-page__title'>404</div>
      <Img imgSrc={rocketTeam} imgAlt='Rocket Team' styleClass='error-page__img' />
      <div className='error-page__textwrap'>
        <span className='error-page__text white'>The rocket team </span>
        <span className='error-page__text black'>has won this time.</span>
      </div>
      <div className='error-page__btn'>Go home</div>
    </div>
  );
};
