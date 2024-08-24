import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

const CustomSwiper = ({ children, ...props }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            grabCursor={true}
            spaceBetween={16}
            slidesPerView='auto'
            centeredSlides='auto'
            breakpoints={{
                1150: {
                    slidesPerView: 4,
                    centeredSlides: false,
                },
            }}
            navigation={true}
            {...props}
        >
            {children}
        </Swiper>
    );
};

export { SwiperSlide };
export default CustomSwiper;
