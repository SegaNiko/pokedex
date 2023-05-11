import './index.scss';

interface IContainer {
  children: string | JSX.Element | JSX.Element[];
}

export function Container({ children }: IContainer) {
  return <div className='container'>{children}</div>;
}
