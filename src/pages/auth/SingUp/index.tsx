import { clsx } from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const SingUp: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className)}></div>
  );
};