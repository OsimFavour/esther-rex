const MapLocation = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                <div className="col-lg-12 pt-5 mt-4">

                    <iframe 
                        title="This is a unique title"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127188.20972022801!2d8.347995449999992!3d5.000709000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067862eeaabcc29%3A0xa2b8722fb5b0b458!2sCalabar%2C%20Cross%20River!5e0!3m2!1sen!2sng!4v1703938645765!5m2!1sen!2sng" 
                        height="450" 
                        className='border-0 w-100'
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default MapLocation