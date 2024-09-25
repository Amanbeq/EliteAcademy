import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from './components/slide';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { AppDispatch, RootState } from '@redux/store';
import { Loader } from '@components/ui/loader';
import { fetchSliderData } from '@redux/cake/sliderSlice';

interface Props {
  className?: string;
}

export const Slider: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: slides, status } = useSelector((state: RootState) => state.slider);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSliderData());
    }
  }, [dispatch, status]);

  return (
    <div className={className}>
      {status === 'loading' && <div className='loader'><Loader /></div>}
      {status === 'succeeded' && slides.length > 0 && (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Slide imgUrl={slide.imageUrl} title={slide.title} text={slide.text} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {status === 'failed' && <div>Failed to load slides.</div>}
    </div>
  );
};
