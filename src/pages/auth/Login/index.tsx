import { clsx } from 'clsx';
import React from 'react';
import { FormField } from '../components/Form';
import { AppIcon } from '@components/ui/app-icon/app-icon';
import { NavLink } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Login: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, 'container login')}>
      <NavLink to={'/'} className='logo'><img src="/logo.png" alt="logo" /></NavLink>
      <FormField isLogin />
      <div className="contact-info">
        <a><AppIcon icon="phone" className='app-icon-20' />+996912691642</a>
        <a><AppIcon icon="mail" className='app-icon-20' />doyouhelp@mail.com</a>
      </div>
    </div>
  );
};