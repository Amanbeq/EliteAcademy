
import { clsx } from 'clsx';
import { Header } from './components/header';
import * as React from 'react';
import { Title } from '@components/Title';
import { Slider } from '@components/Slider';
import { Footer } from '@components/Footer';

interface Props {
  className?: string;
}

const Home: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <Header className="container" />
      <div className="container">
        <Title text="Образование за рубежом!" variant={'h2'} />
        <Slider className='slider' />
      </div>
      <div className='footer'>
        <div className='container'><Footer className='footer-inner' /></div>
      </div>

    </div>
  );
};

export default Home;