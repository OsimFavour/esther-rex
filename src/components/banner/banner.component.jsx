import MainBanner from '../main-banner/main-banner.component'
import SideBanner from '../side-banner/side-banner.component'

const Banner = () => {
    return (
        <div className="main-banner" id="top">
            <div className="container-fluid">
                <div className="row">
                    <MainBanner />
                    <SideBanner />
                </div>
            </div>
        </div>
    )
}

export default Banner