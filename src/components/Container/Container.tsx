import { StylesContainer } from './styles';

interface IContainer {
  children: string | JSX.Element | JSX.Element[];
}

export const Container = ({ children }: IContainer) => {
  return <StylesContainer>{children}</StylesContainer>;
};
