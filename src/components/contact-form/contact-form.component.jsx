const ContactForm = () => {
  return (
    <> 
            <div className="contact-us">
                <div className="container">
                    <div className="row">
                       

                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Contact Us!</h2>
                                <span>Put in your details and you'll hear from us.</span>
                            </div>
                            <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-lg-6 pb-4">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Your name" required=""/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <input name="email" type="text" id="email" placeholder="Your email" required=""/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea name="message" rows="6" id="message" placeholder="Your message" required=""></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset/>
                                        <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default ContactForm