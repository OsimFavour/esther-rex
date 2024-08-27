import bannerData from '../../banner-data.json'
import SideBannerCard from '../side-banner-card/side-banner-card.component'

const SideBanner = () => {
    return (
        <div className="col-lg-6">
            <div className="right-content">
                <div className="row">

                    {bannerData.map((bannerData) => <SideBannerCard key={bannerData.id} bannerData={bannerData} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default SideBanner