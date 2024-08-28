import { Link } from 'react-router-dom'
import blogData from '../../blog-data.json'

const BlogBannerCard = () => {
    const data = blogData[0]
    return (
        <div class="card">
            <div class="card-header text-center">
                <h5 class="card-title">Voluptates Corporis Placeat</h5> 
                <small class="small text-muted">January 24 2019</small>
            </div>
            <div class="card-body">
                <div class="blog-media">
                    <img src={data.imageUrl} alt="" class="w-100"/>
                    <Link to="#" class="badge badge-primary">{data.placard}</Link>     
                </div>  
                <p class="my-3">{data.content}</p>
            </div>
            
            <div class="card-footer d-flex justify-content-between align-items-center flex-basis-0">
                <button class="btn btn-primary circle-35 mr-4"><i class="ti-back-right"></i></button>
                <Link to={`/blog/${data.id}`} class="btn btn-outline-dark btn-sm">READ MORE</Link>
                <Link to="#" class="text-dark small text-muted">By : Dr Esther Rex</Link>
            </div>                  
        </div>
    )
}

export default BlogBannerCard