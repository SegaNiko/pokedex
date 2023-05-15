import { Outlet } from 'react-router-dom';
import { LayoutHeader, LayoutHeaderWrap, LayoutLogo } from './styles';
import { Container } from '@components';
import logo from '@img/logo.png';

export const Layout = () => {
  return (
    <>
      <LayoutHeader>
        <Container>
          <LayoutHeaderWrap>
            <LayoutLogo src={logo} alt='pokemon logo' />
          </LayoutHeaderWrap>
        </Container>
      </LayoutHeader>
      <Outlet />
    </>
  );
};
