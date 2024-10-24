import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import { MenuDropdownContext } from "../../context/menu-dropdown.context"

const Header = () => {

    const [subMenuOpen, setSubMenuOpen] = useState(false)

    const { isMenuOpen, setIsMenuOpen } = useContext(MenuDropdownContext)

    const toggleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen);
        
    }

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen)
        
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
        setSubMenuOpen(false)
    }

    const handleLinkClick = (e) => {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    }

    return (
        <header className="header-area header-sticky background-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                        
                            <Link to="/" className="logo text-dark" onClick={closeMenu}>
                                esther rex
                                
                            </Link>
                            <ul className={`nav ${isMenuOpen ? 'show' : ''}`} onClick={handleLinkClick}>
                                <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                                <li className="scroll-to-section"><Link to="/blog">Blog</Link></li>
                                <li className="scroll-to-section"><Link to="/ewa">EWA</Link></li>
                                <li className="scroll-to-section"><Link to="/contact">Contact</Link></li>
                                <li className="scroll-to-section"><Link to="/sign-in">Login</Link></li>
                                
                                
                                
                            </ul>
                                
                            <div className='menu-trigger' onClick={toggleIsMenuOpen}>
                                <span>Menu</span>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header