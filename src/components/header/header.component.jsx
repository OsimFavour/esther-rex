import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import { MenuDropdownContext } from "../../context/menu-dropdown.context"

const Header = () => {

    const [subMenuOpen, setSubMenuOpen] = useState(null)

    const { isMenuOpen, setIsMenuOpen } = useContext(MenuDropdownContext)

    const toggleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen);
        
    }

    const toggleSubMenu = (index) => {
        setSubMenuOpen(subMenuOpen === index ? null : index)
        console.log(`sub-menu ${subMenuOpen}`);
        
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
        setSubMenuOpen(null)
    }

    const handleLinkClick = (e) => {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    }

    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                        
                            <Link to="/" className="logo text-dark">
                                esther rex
                                
                            </Link>
                            <ul className={`nav ${isMenuOpen ? 'show' : ''}`} onClick={handleLinkClick}>
                                <li className="scroll-to-section"><Link to="/about" className="active">About</Link></li>
                                <li className="scroll-to-section"><Link to="/blog">Blog</Link></li>
                                <li className="scroll-to-section"><Link to="">Books</Link></li>
                                <li className="scroll-to-section"><Link to="">Ministry</Link></li>
                                <li className="scroll-to-section"><Link to="/contact">Contact</Link></li>
                                
                                
                                <li className="submenu">
                                    <Link to="" onClick={() => toggleSubMenu(0)}><i className="fa-regular fa-user"></i></Link>
                                    <ul className={`submenu-list ${subMenuOpen === 0 ? 'open' : ''}`}>
                                        <li><Link to="/login">Sign In</Link></li>
                                        <li><Link to="/signup">Sign Up</Link></li>
                                        <li><Link to="#">Dashboard</Link></li>
                                        <li><Link to="/logout">Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                                
                            <div className='menu-trigger' onClick={toggleIsMenuOpen}>
                                <span>Menu</span>
                            </div>

                            {/* {isMenuOpen && <MenuDropdown/>} */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header