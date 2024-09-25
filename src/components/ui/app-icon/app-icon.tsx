import React from 'react';
import clsx from 'clsx';
import twiter from '@images/twiter.png';
import github from '@images/github.png';
import location from '@images/location.png';
import mail from '@images/mail.png';
import instagram from '@images/instagram.png';
import facebook from '@images/facebook.png';
import phone from '@images/phone.png';

const iconsMap: { [key: string]: string } = {
  twitter: twiter,
  github: github,
  facebook: facebook,
  instagram: instagram,
  location: location,
  mail: mail,
  phone: phone,
};

interface Props {
  className?: string;
  icon: keyof typeof iconsMap;
}

export const AppIcon: React.FC<Props> = ({ className, icon }) => {
  const imgSrc = iconsMap[icon];

  return (
    <div className={clsx(className, 'app-icon')}>
      <img src={imgSrc} alt='img' />
    </div>
  );
};
