import { Link } from "react-router-dom"

import './blog-card.styles.scss'

const BlogCard = ({ blogData }) => {
    const { content, date, imageUrl, placard, title } = blogData
    return (
        <div className="col-lg-4">
            <div className="service-item">
                <div className="card text-center mb-5">
                    <div className="card-header p-0">                                   
                        <div className="blog-media">
                            <img src={imageUrl} alt="" className="img-fluid w-100"/>
                            <Link to="#" className="badge badge-primary">{placard}</Link>        
                        </div>  
                    </div>
                    <div className="card-body px-0">
                        <h5 className="card-title mb-2">{title}</h5>    
                        <small className="small text-muted">{date}</small>
                        <p className="my-2">{content}</p>
                    </div>
                    
                    <div className="card-footer p-0 mb-4 text-center">
                        <Link to={`/blog/${blogData.id}`} className="btn btn-outline-dark btn-sm">READ MORE</Link>
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default BlogCard