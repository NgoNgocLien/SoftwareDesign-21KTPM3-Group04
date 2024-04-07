import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet  } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { useSelector } from 'react-redux';
import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'; // Import your Navbar component
import Footer from './components/footer/Footer'; // Import your Footer component
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import Writing from './pages/Writing';

export const history = createBrowserHistory();

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

// Define route in Route Layout to use navbar

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="" element={<Layout />}>
          
          <Route path="" element={<Home />} />
          <Route path="search-result" element={<SearchResult />} />
          <Route path="write" element={<Writing />} />
        </Route>

        <Route path="login" element={<SearchResult />} />
      </Routes>
    </Router>
  );
}


export default App;