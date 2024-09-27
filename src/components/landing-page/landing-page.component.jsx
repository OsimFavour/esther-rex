import { Link } from "react-router-dom"
import landingPage from '../../assets/home-img.png'

import './landing-page.styles.scss'
import Button from "../button/button.component"

const LandingPage = () => {
    return (
        <section className="hero">

            <img src={landingPage} alt="" data-aos="fade-in" className=""/>

            <div className="container mt-5">
                <div className="row justify-content-center" data-aos="zoom-out">
                <div className="col-xl-7 col-lg-9 text-center">
                    <h1>On a Mission to train & equip 1,000 women.</h1>
                    <p>Register for the Esther's Wisdom Academy Here</p>
                </div>
                </div>
                <div className="text-center mt-4" data-aos="zoom-out">
                    <Button buttonType='landing'>Get Started</Button>
                </div>

                <div className="row gy-4 mt-5">

                    <div className="col-md-6 col-lg-6" data-aos="zoom-out" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="bi bi-easel"></i></div>
                            <h4 className="title"><Link to="">Strenght For Today</Link></h4>
                            <p className="description">Build strength and capacity with our faith building daily devotional</p>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-6" data-aos="zoom-out" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon"><i className="bi bi-geo-alt"></i></div>
                            <h4 className="title"><Link to="">Esther's Wisdom</Link></h4>
                            <p className="description">Join thousands of women all around the world learning about marriage, ministry & money in EWA</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default LandingPage