import { Link, useParams } from "react-router-dom"

import BLOG_DATA from '../../blog-data.json'
import BLOG_RELATED_DATA from '../../blog-related-data.json'
import BlogRelated from "../../components/blog-related/blog-related.component"

import './blog-view.component.scss'

const BlogView = () => {
    const { id } = useParams()
    const blog = BLOG_DATA.find((blog) => blog.id === parseInt(id))

    if (!blog) {
        return <h2>Blog Content Not Found!</h2>
    }

    return (
        <>
            <header className="page-header page-header-mini mt-5 pt-5">
                <div className="mt-5">
                    <h1 className="title">{blog.title}</h1>
                    <ol className="breadcrumb pb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{blog.title}</li>
                    </ol>
                </div>
            </header>

            <section className="container">
                <div className="page-container">
                    <div className="page-content">
                        <div className="card">
                            <div className="card-header pt-0">
                                <h3 className="card-title mb-4">{blog.title}</h3>
                                <div className="blog-media mb-4">
                                    <img src={blog.imageUrl} alt="" className="w-100"/>
                                    <Link to="/" className="badge badge-primary">{blog.placard}</Link> 
                                </div>  
                                <small className="small text-muted">
                                    <Link to="/" className="text-muted">BY Admin</Link>
                                    <span className="px-2">·</span>
                                    <span>{blog.date}</span>
                                </small>
                        
                            </div>
                            <div className="card-body border-top">
                                <p className="my-3">{blog.content}</p>

                                <p>{blog.content}</p>
                            </div>
                            
                                         
                            </div> 

                        <h6 className="mt-5 text-center">Related Posts</h6>
                        <hr/>
                        <div className="row">                       
                            {BLOG_RELATED_DATA.map((blogRelatedData) => <BlogRelated key={blogRelatedData.id} blogRelatedData={blogRelatedData}/>)}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BlogView