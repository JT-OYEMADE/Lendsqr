import React from 'react';
import { Dashboard } from './components/dashboard';
import UserDetailsLayout from './components/userDetailsLayout'
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/index.scss'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/users' element={<Dashboard />} />
        <Route path='/user' element={<UserDetailsLayout />} />
        <Route path='*' element={<h2>NOT FOUND</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
