import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Styles/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import User from './Components/Pages/User';
import { UserStorage } from './Contexts/UserContext';
import ProtectedRoute from './Components/Helpers/ProtectedRoute';
import Photo from './Components/Pages/Photo';
import UserProfile from './Components/Pages/UserProfile';
import NotFound from './Components/Pages/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <Route path='conta/*' element={<ProtectedRoute element={<User />} />} />
              <Route path='photo/:id' element={<Photo />} />
              <Route path='perfil/:user' element={<UserProfile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;