import './App.css';

import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/layout.component';
import Home from './routes/home/home.component';
import Blog from './routes/blog/blog.component';
import BlogView from './routes/blog-view/blog-view.component';
import Contact from './routes/contact/contact.component';
import SignIn from './routes/sign-in/sign-in.component';
import SignUp from './routes/sign-up/sign-up.component';
import AcademyRegistration from './routes/academy-registration/academy-registration.component';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<BlogView />} />
          <Route path='ewa' element={<AcademyRegistration />} />
          <Route path='contact' element={<Contact />} />
          <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
