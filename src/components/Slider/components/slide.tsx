import { clsx } from 'clsx';
import React from 'react';

interface Props {
  imgUrl: string;
  title: string;
  text: string;
  className?: string;
}

export const Slide: React.FC<Props> = ({ title, imgUrl, text, className }) => {

  return (
    <div className={clsx(className, "slide")} >
      <div className='slider-image'><img src={imgUrl} alt='img' /></div>
      <div className='slider-context'>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};