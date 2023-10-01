import style from './HomeLayout.module.css';

interface Props {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return <div className={style['home-layout']}>{children}</div>;
};
