import { Link } from 'react-router-dom'
import footerData from '../../footer-data.json'

const FooterSocial = () => {
    return (
        <div className="col-lg-12">
            <div className="under-footer">
                <p>{footerData[2].text}</p>
                <ul>
                    {footerData[2].socials.map((social, idx) => (
                    <li key={idx}>
                        <Link to={social.to}>
                            <i className={social.icon}></i>
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FooterSocial