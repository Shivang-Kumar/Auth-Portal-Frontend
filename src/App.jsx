import { useState } from 'react';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import { AuthProvider  } from './hooks/useAuth';
import {PrivateRoute} from './hooks/privateRoute';

function App() {
 return(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>} />
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