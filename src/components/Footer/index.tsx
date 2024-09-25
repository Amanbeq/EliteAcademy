import { Title } from '@components/Title';
import { AppIcon } from '@components/ui/app-icon/app-icon';
import { clsx } from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <div className="footer-column">
        <div className="logo"><img src="/logo.png" alt="logo" /></div>
        <p className="description"><span>Мы заботимся о наших клиентах.</span>
          <span>Гарантируем поступление в Топ-Вузы.</span>
          <span>Бесплатные курсы по TOELF и Dujlingo.</span>
        </p>
        <div className="social">
          <a target='_blank' href="http://www.twitter.com"><AppIcon icon="twitter" className='app-icon-20' /></a>
          <a target='_blank' href="http://www.facebook.com"><AppIcon icon="facebook" className='app-icon-20' /></a>
          <a target='_blank' href="http://www.instabram.com"><AppIcon icon="instagram" className='app-icon-20' /></a>
          <a target='_blank' href="http://www.github.com"><AppIcon icon="github" className='app-icon-20' /></a>
        </div>
        <Link className='link' to="/login">Для персонала</Link>
      </div>
      <div className="footer-column">
        <Title text='Компания' variant='h5' />
        <ul className="footer-list">
          <li><a target='_blank' href="#">О нас</a></li>
          <li><a target='_blank' href='#'>Функции</a></li>
          <li><a target='_blank' href='#'>Работы</a></li>
          <li><a target='_blank' href='#'>Карьера</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <Title text='Ресурсы' variant='h5' />
        <ul className="footer-list">
          <li><a target='_blank' href="#">Бесплатные электронные книги</a></li>
          <li><a target='_blank' href='#'>Учебник по разработке</a></li>
          <li><a target='_blank' href='#'>Как это сделать - Блог</a></li>
          <li><a target='_blank' href='#'>Плейлист на Instagram</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <ul className="footer-card">
          <li>
            <a target='_blank' href="#">
              <AppIcon icon='phone' className='app-icon-32' />
              <p><span>Номер</span><span>555-555-5555</span></p>
            </a>
          </li>
          <li>
            <a target='_blank' href="#">
              <AppIcon icon='mail' className='app-icon-32' />
              <p><span>Mail</span><span>@eliteacademy.kg</span></p>
            </a>
          </li>
          <li>
            <a target='_blank' href="#">
              <AppIcon icon='phone' className='app-icon-32' />
              <p><span>Адрес</span><span>г.Бишкек, Ахунбаева 169, БЦ “ БИНОКЛЬ”, 5-этаж</span></p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};