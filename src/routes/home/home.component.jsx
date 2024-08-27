import Banner from "../../components/banner/banner.component"
import BlogPreview from "../../components/blog-preview/blog-preview.component"
import BookPreview from "../../components/book-preview/book-preview.component"

const Home = () => {
    return (
        <>
            <Banner />
            <BookPreview />
            <BlogPreview />
        </>
    )
}

export default Home