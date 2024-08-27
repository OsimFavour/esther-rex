import FooterLine from "../footer-line/footer-line.component"
import FooterSocial from "../footer-social/footer-social.component"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <FooterLine/>             
                    <FooterSocial/>
                </div>
            </div>
      </footer>
    )
}

export default Footer