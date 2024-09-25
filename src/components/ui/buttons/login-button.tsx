import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
  text?: string;
}

export const LoginButton: React.FC<Props> = ({ className, text = 'Клик' }) => {
  return (
    <button className={clsx(className, "btn primary-btn")}>
      {text}
    </button>
  );
};