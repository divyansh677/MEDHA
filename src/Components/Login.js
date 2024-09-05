import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Image from "../Assets/LoginImage/loginIm.jpg";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required!');
    } else {
      setError('');
      console.log('Logged in with:', email, password);
      onLogin(); // Call the function to update login state in App.js
      navigate('/Navbar'); // Redirect user after successful login
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-300 to-blue-500 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row max-w-4xl w-full">
        {/* Left Section: Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Sign In</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <Link to="/signup" className="text-sm text-blue-600 hover:underline">
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src={Image} // Replace this with your image URL
            alt="Login Illustration"
            className="object-cover w-full h-full rounded-r-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-500 bg-opacity-50">
            <div className="text-center text-white p-6">
              <h3 className="text-2xl font-semibold">WeHealth</h3>
              <p className="mt-4">Providing the best healthcare services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
