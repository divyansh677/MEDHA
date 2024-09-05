import './App.css';
import Navbar from './Components/DashBoard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';
import LandingPage from './Components/Landingpage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <Router>
      {/* Show Navbar only if the user is logged in */}
      {isLoggedIn && <Navbar />}

      {/* Define routes */}
      <Routes>
        {/* Default route */}
        <Route path='/' element={<LandingPage/>}/>
        {/* Login route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {/* Signup route */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
