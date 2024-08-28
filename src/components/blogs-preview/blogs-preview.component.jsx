import BlogCard from '../blog-card/blog-card.component'

import BLOG_DATA from '../../blog-data.json'

const BlogsPreview = () => {
    return (
        <div class="row"> 
            {BLOG_DATA.map((blogData) => <BlogCard key={blogData.id} blogData={blogData}/>)}                      
            
        </div>
    )
}

export default BlogsPreview