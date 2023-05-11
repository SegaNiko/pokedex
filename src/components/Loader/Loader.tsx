import gif from '@img/pikachu.gif';
import { Img } from '@ui-kit';

import './index.scss';

export const Loader = () => {
  return (
    <div className='loader'>
      <Img imgSrc={gif} imgAlt='Loader...' />
    </div>
  );
};
