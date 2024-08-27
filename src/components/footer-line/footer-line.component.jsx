import { Link } from 'react-router-dom'
import footerData from '../../footer-data.json'

const FooterLine = () => {
    return (
        <>
            {footerData.slice(0, 4).map((section, index) => (
                <div className="col-lg-3" key={index}>
                    <h4>{section.section === "first-item" ? section.title : section.section}</h4>
                    <ul>
                        {section.links.map((link, idx) => (
                        <li key={idx}>
                            <Link to={link.to}>{link.text}</Link>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}

export default FooterLine