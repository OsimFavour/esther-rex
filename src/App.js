import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout.component';
import Home from './routes/home/home.component';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
