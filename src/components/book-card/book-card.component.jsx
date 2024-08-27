const BookCard = ({ bookData }) => {
    const { title, imageUrl, price } = bookData

    return (
        <article className="featured__card swiper-slide">
            <img src={imageUrl} alt="" className="featured__image img-fluid"/>
            
            <h2 className="featured__title">{title}</h2>
            <div className="featured__prices">
                <span className="featured__discount">${price}</span>
                <span className="featured__price">$11.99</span>
            </div>

            
            <button type="submit" id="form-submit" className="main-dark-button">
                Buy Now
            </button>
        </article>
    )
}

export default BookCard