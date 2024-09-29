import BlogPreview from "../../components/blog-preview/blog-preview.component"
// import BookPreview from "../../components/book-preview/book-preview.component"
import EventPreview from "../../components/event-preview/event-preview.component"
import LandingPage from "../../components/landing-page/landing-page.component"

const Home = () => {
    return (
        <>
            <LandingPage />
            {/* <BookPreview /> */}
            <BlogPreview />
            <EventPreview />
        </>
    )
}

export default Home