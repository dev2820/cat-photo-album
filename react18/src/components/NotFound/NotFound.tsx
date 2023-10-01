import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  message: string;
}

export const NotFound = ({ message, ...props }: Props) => {
  return (
    <div {...props}>
      <h1>{message}</h1>
      <img src="/404notFound.png" width={'100%'} />
    </div>
  );
};
