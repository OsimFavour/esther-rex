import Banner from "../../components/banner/banner.component"
import BlogPreview from "../../components/blog-preview/blog-preview.component"
import BookPreview from "../../components/book-preview/book-preview.component"
import EventPreview from "../../components/event-preview/event-preview.component"

const Home = () => {
    return (
        <>
            <Banner />
            <BookPreview />
            <BlogPreview />
            <EventPreview />
        </>
    )
}

export default Home