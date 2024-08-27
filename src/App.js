import './App.css';

import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/layout.component';
import Home from './routes/home/home.component';
import Blog from './routes/blog/blog.component';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
