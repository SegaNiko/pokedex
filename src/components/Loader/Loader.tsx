import gif from '@img/pikachu.gif';

import { LoaderWrap, LoaderGif } from './styles';

export const Loader = () => {
  return (
    <LoaderWrap>
      <LoaderGif src={gif} alt='Loader...' />
    </LoaderWrap>
  );
};
