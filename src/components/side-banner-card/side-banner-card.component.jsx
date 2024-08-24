import { Link } from "react-router-dom"

const SideBannerCard = ({ bannerData }) => {
    const { title, subTitle, imageUrl, hoverTitle, hoverContent } = bannerData

    return (
        <div className="col-lg-6">
            <div className="right-first-image">
                <div className="thumb">
                    <div className="inner-content">
                        <h4>{title}</h4>
                        <span>{subTitle}</span>
                    </div>
                    <div className="hover-content">
                        <div className="inner">
                            <h4>{hoverTitle}</h4>
                            <p>{hoverContent}</p>
                            <div className="main-border-button">
                                <Link to="/">Discover More</Link>
                            </div>
                        </div>
                    </div>
                    <img src={imageUrl} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default SideBannerCard