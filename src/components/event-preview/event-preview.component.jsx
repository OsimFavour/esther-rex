import './event-preview.styles.scss'

const EventPreview = () => {
    return (
        <section className="section" id="explore">
            <div className="container event-container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-content">
                            <h2>Enrol for Esther's Women Academy here</h2>
                            <span>
            
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation.
                            </span>
                            
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation.
                            </p>
                            
                            <div className="main-border-button">
                                <a href="products.html">Discover More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="leather text-center">
                                        <h4>Tutorials</h4>
                                        <span>New Courses</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-2">
                                    <div className="image-center">
                                        <img src='https://i.ibb.co/hDFhm97/home-img.jpg' height='255px' width='255px' alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image-center">
                                        <img src='https://i.ibb.co/qg6qdrF/home-img-02.jpg' height='255px' width='255px' alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-center">
                                        <h4>Best Selling Books</h4>
                                        <span>Over 304 Books</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventPreview