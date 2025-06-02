import { useState } from 'react';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { AuthProvider  } from './hooks/useAuth';
import {PrivateRoute} from './hooks/privateRoute';

function App() {
 return(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
          
          <Route path="/home" element={
            <PrivateRoute>
                 <Home />
            </PrivateRoute>
          }
          />
         
      </Routes>
    </Router>
  </AuthProvider>
 );
};

export default App;