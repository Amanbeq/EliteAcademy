import { clsx } from 'clsx';
import { LoginButton } from '../../../components/ui/buttons/login-button';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, 'header')}>
      <div className='logo'><img src="/logo.png" alt="logo" /></div>
      <div className="navbar">
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
      <LoginButton text='Регистрация' />
    </div>
  );
};