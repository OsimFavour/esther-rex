import ContactForm from "../../components/contact-form/contact-form.component"
import MapLocation from "../../components/map-location/map-location.component"

const Contact = () => {
    return (
        <>

            <div className="contact-wrapper py-5 home-wrapper-2">
                <div className="container">
                <div className="row">
                    
                    <MapLocation/>

                    <ContactForm/>
                </div>
                </div>
            </div>

        </>
    )
}

export default Contact 