import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Categories from "./components/Categories/Categories";
import Cities from "./components/Cities/Cities";
import Brands from "./components/Brands/Brands";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={<Login setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route 
            path="/" 
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/categories" 
            element={isAuthenticated ? <Categories /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/cities" 
            element={isAuthenticated ? <Cities /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/brands" 
            element={isAuthenticated ? <Brands /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
