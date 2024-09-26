import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import React from 'react';

import "./styles/app.scss";
import Loading from './components/Loading';
import Header from './components/Header';

const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));
const Search = lazy(() => import('./pages/Search'));
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<Search />} />
          <Route path='/login' element={<Login />} key='login'></Route>
          <Route path='/profile' element={<Profile id='' email=''/>} key='profile'></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
//header should be rendred on all pages so taken out of the routes