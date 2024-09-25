import { clsx } from 'clsx';
import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  text: string;
  className?: string;
  variant?: Variant;
}

export const Title: React.FC<Props> = ({ className, text, variant }) => {
  const Tag = variant || 'h3';
  return (
    <Tag className={clsx(className, `title title-${variant}`)}>{text}</Tag>
  );
};