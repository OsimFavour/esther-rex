import { Link, useNavigate } from 'react-router-dom'
import blogData from '../../blog-data.json'
import Button from '../button/button.component';

const BlogBannerCard = () => {
    const data = blogData[0]
    const navigate = useNavigate();
    const goToBlogViewHandler = () => navigate(`/blog/${data.id}`);
    return (
        <div className="card">
            <div className="card-header text-center">
                <h5 className="card-title">Voluptates Corporis Placeat</h5> 
                <small className="small text-muted">January 24 2019</small>
            </div>
            <div className="card-body">
                <div className="blog-media">
                    <img src={data.imageUrl} alt="" className="w-100"/>
                    <Link to="#" className="badge badge-primary">{data.placard}</Link>     
                </div>  
                <p className="my-3">{data.content}</p>
            </div>
            
            <div className="card-footer d-flex justify-content-between align-items-center flex-basis-0">
                <button className="btn btn-primary circle-35 mr-4"><i className="ti-back-right"></i></button>
                <Button buttonType='inverted' onClick={goToBlogViewHandler}>READ MORE</Button>
                <Link to="#" className="text-dark small text-muted">By : Dr Esther Rex</Link>
            </div>                  
        </div>
    )
}

export default BlogBannerCard