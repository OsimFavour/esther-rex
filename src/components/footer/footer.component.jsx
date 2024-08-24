import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="first-item">
                            <div className="logo text-white">
                                Esther Rex
                            </div>
                            <ul>
                                <li><Link to="">Goshem, Parliamentary Extension, P.O 59301, Calabar</Link></li>
                                <li><Link to="">admin@estherrex.com</Link></li>
                                <li><Link to="">010-020-0340</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h4>Books Categories</h4>
                        <ul>
                            <li><Link to="">Marriage</Link></li>
                            <li><Link to="">Parenting</Link></li>
                            <li><Link to="">Children</Link></li>
                            <li><Link to="">Mission Space</Link></li>
                            <li><Link to="">Bible Games</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><Link to="/">Homepage</Link></li>
                            <li><Link to="">About Us</Link></li>
                            <li><Link to="">Profile</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h4>Help &amp; Information</h4>
                        <ul>
                            <li><Link to="">Help</Link></li>
                            <li><Link to="">FAQ's</Link></li>
                            <li><Link to="">Tutorials</Link></li>
                            <li><Link to="">Purchases</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-12">
                        <div className="under-footer">
                            <p>Copyright © 2024 Esther Rex. All Rights Reserved. </p>
                            <ul>
                            
                                <li><Link to=""><i className="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link to=""><i className="fa-brands fa-x-twitter"></i></Link></li>
                                <li><Link to=""><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                <li><Link to=""><i className="fa-brands fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
    )
}

export default Footer