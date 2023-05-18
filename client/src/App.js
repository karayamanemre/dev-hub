import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
      <section className="container">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </section>
    </BrowserRouter>
  </Provider>
);

export default App;
