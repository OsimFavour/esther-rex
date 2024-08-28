import { Link } from "react-router-dom"

const BlogRelated = ({ blogRelatedData }) => {
    const { title, imageUrl, badge, date } = blogRelatedData
    
    
    return (
       
        <div className="col-md-6 col-lg-4">
            <div className="card mb-5">
                <div className="card-header p-0">                                   
                    <div className="blog-media">
                        <img src={imageUrl} alt="" className="w-100"/>
                        <Link to="/" className="badge badge-primary">{badge}</Link>        
                    </div>  
                </div>
                <div className="card-body px-0">
                    <h6 className="card-title mb-2"><Link herf="#" className="text-dark">{title}</Link></h6>   
                    <small className="small text-muted">{date}</small>
                </div>      
            </div>
        </div>
       
    )
}

export default BlogRelated