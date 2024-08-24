import { Link } from "react-router-dom"

const MainBanner = () => {
    return (
        <div className="col-lg-6">
            <div className="left-content">
                <div className="thumb">
                    <div className="inner-content">
                        <h4>Welcome to my website</h4>
                        <span>My mission is to raise the younger generation</span>
                        <div className="main-border-button">
                            <Link to="/">See more!</Link>
                        </div>
                    </div>
                    <img src='https://i.ibb.co/xjkJv5k/main-banner.png' alt=""/>
                </div>
            </div>
        </div>
    )
}

export default MainBanner