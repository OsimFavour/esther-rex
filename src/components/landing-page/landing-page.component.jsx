import { Link } from "react-router-dom"
import landingPage from '../../assets/home-img.png'

import './landing-page.styles.scss'

const LandingPage = () => {
    return (
        <section className="hero">

            <img src={landingPage} alt="" data-aos="fade-in" className=""/>

            <div className="container mt-5">
                <div className="row justify-content-center" data-aos="zoom-out">
                <div className="col-xl-7 col-lg-9 text-center">
                    <h1>On a Mission to win 1,000 souls.</h1>
                    <p>Join me and my dedicated team as we take over the city for Christ</p>
                </div>
                </div>
                <div className="text-center" data-aos="zoom-out">
                <Link to='' className="btn btn-dark btn-lg mt-3 border-0">Get Started</Link>
                {/* <button className="main-dark-button">Get Started</button> */}
                </div>

                <div className="row gy-4 mt-5">
                <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="bi bi-easel"></i></div>
                    <h4 className="title"><Link to="">Strenght For Today</Link></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="200">
                    <div className="icon-box">
                    <div className="icon"><i className="bi bi-gem"></i></div>
                    <h4 className="title"><Link to="">Child of promise</Link></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="300">
                    <div className="icon-box">
                    <div className="icon"><i className="bi bi-geo-alt"></i></div>
                    <h4 className="title"><Link to="">Esther's Wisdom</Link></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="400">
                    <div className="icon-box">
                    <div className="icon"><i className="bi bi-command"></i></div>
                    <h4 className="title"><Link to="">Mission Space</Link></h4>
                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                </div>

                </div>
            </div>

        </section>
    )
}

export default LandingPage