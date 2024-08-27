import BLOG_DATA from '../../blog-data.json'
import BlogCard from '../blog-card/blog-card.component'

const BlogPreview = () => {
    return (
        <section className="our-services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Our Blog</h2>
                            <span>
                                Everything you need to know about Strength
                                for Today
                            </span>
                        </div>
                    </div>


                    {BLOG_DATA.filter((_, idx) => idx < 3)
                    .map((blogData) => (
                        <BlogCard key={blogData.id} blogData={blogData}/>
                    ))}
                
                </div>
            </div>
        </section>
    )
}

export default BlogPreview