import BookCard from "../book-card/book-card.component";
import CustomSwiper, { SwiperSlide } from "../custom-swiper/custom-swiper.component";

import BOOK_DATA from '../../book-data.json';

const BookPreview = () => {
    return (
        <>
            <div className="featured__header section-heading">
                <h2 className='p-4'>
                    Featured Books
                </h2>
            </div>
            <CustomSwiper
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}            
            >
                <div className="featured__container featured__section">

                    <div className="featured__swiper">
                        <div className="container w-100">
                            {BOOK_DATA.map((bookData) => (
                                <SwiperSlide>
                                    <BookCard key={bookData.id} bookData={bookData} />
                                </SwiperSlide>
                            ))}
                        
                        </div>
                        
                    </div>

                </div>
                
            </CustomSwiper>

        </>
    )
}

export default BookPreview