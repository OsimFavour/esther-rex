import { useSwiper } from 'swiper/react'

const SwiperButton = () => {
    const swiper = useSwiper()
    return (
        <div>
            <div className="swiper-button-prev">
                <div onClick={() => swiper.slidePrev()}>&#10094;</div>         
            </div>

            <div className="swiper-button-next">
                <div onClick={() => swiper.slideNext()}>&#10094;</div>  
            </div>
        </div>
    )
}

export default SwiperButton