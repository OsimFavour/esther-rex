import BlogBannerCard from '../../components/blog-banner-card/blog-banner-card'
import BlogsPreview from '../../components/blogs-preview/blogs-preview.component'
import Button from '../../components/button/button.component'

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

                        <Button buttonType='inverted'>Load More Posts</Button>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog