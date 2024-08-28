import BlogBannerCard from '../../components/blog-banner-card/blog-banner-card'
import BlogsPreview from '../../components/blogs-preview/blogs-preview.component'

import './blog.styles.scss'

const Blog = () => {
    return (
        <>
            <div class="container">
                <div class="page-container">
                    <div class="page-content">
                        <BlogBannerCard />
                        <hr/>
                        <BlogsPreview />
                        
                        <button class="btn btn-outline-dark btn-block my-4">Load More Posts</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog