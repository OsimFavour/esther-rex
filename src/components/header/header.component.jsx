import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                        
                            <Link to="index.html" className="logo text-dark">
                                esther rex
                                
                            </Link>
                            <ul className="nav">
                                <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                                <li className="scroll-to-section"><Link to="/about">About</Link></li>
                                <li className="scroll-to-section"><Link to="/blog">Blog</Link></li>
                                <li className="submenu">
                                    <Link to="">Books</Link>
                                    <ul>
                                        <li><Link to="about.html">Marriage</Link></li>
                                        <li><Link to="products.html">Parenting</Link></li>
                                        <li><Link to="single-product.html">Mission Space</Link></li>
                                        <li><Link to="contact.html">Children</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="">Ministry</Link>
                                    <ul>
                                        <li><Link to="#">EWA</Link></li>
                                        <li><Link to="#">Marriage Mentorship</Link></li>
                                        <li><Link to="#">Prayer Palace</Link></li>
                                        <li><Link rel="nofollow" to="https://templatemo.com/page/4" target="_blank">Child of Promise</Link></li>
                                    </ul>
                                </li>
                                <li className="scroll-to-section"><Link to="/contact">Contact</Link></li>
                                <li className="submenu">
                                    <Link to=""><i className="fa-regular fa-user"></i></Link>
                                    <ul>
                                        <li><Link to="/login">Sign In</Link></li>
                                        <li><Link to="/signup">Sign Up</Link></li>
                                        <li><Link to="#">Dashboard</Link></li>
                                        <li><Link to="/logout">Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>  
                                
                            <Link className='menu-trigger'>
                                <span>Menu</span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header