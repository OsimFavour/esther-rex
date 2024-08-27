import BlogCard from '../../components/blog-card/blog-card.component'
import BlogBannerCard from '../../components/blog-banner-card/blog-banner-card'

import BLOG_DATA from '../../blog-data.json'

import './blog.styles.scss'

const Blog = () => {
    return (
        <>
            <div class="container">
                <div class="page-container">
                    <div class="page-content">
                        <BlogBannerCard />
                        <hr/>
                        <div class="row"> 
                            {BLOG_DATA.map((blogData) => <BlogCard key={blogData.id} blogData={blogData}/>)}                      
                            
                        </div>
                        
                        
                        <button class="btn btn-outline-dark btn-block my-4">Load More Posts</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog