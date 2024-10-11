import { Outlet } from "react-router-dom"

import Header from "../header/header.component"
import Footer from "../footer/footer.component"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Layout = () => {
    return (
        <>
   
            <Header />
                <Outlet />
            <Footer />


            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default Layout