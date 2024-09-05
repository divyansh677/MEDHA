import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import image from "../Assets/SignupImage/SignIm.jpg";

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !city || !state || !dob) {
      setError('All fields are required!');
    } else {
      setError('');
      console.log('Signed up with:', { name, email, phone, city, state, dob });
      navigate('/login'); // Redirect user to login page after signup
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-green-300 to-green-500 p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row max-w-2xl w-full mx-4 sm:mx-6 lg:mx-8">
        {/* Left Section: Signup Form */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold text-center mb-4 text-green-600">Sign Up</h2>
          {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-xs"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-xs"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-xs"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-xs font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-xs"
                placeholder="Enter your city"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-xs font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-xs"
                placeholder="Enter your state"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-xs font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-xs"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 sm:text-xs"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-center mt-3">
            <Link to="/login" className="text-xs text-green-600 hover:underline">
              Already have an account? Sign In
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src={image}
            alt="Signup Illustration"
            className="object-contain w-full h-full rounded-r-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 bg-opacity-60 rounded-r-lg">
            <div className="text-center text-white px-4">
              <h3 className="text-lg font-semibold">WeHealth</h3>
              <p className="mt-2 text-xs font-light">
                Providing top-notch healthcare services to help you stay healthy and happy.
              </p>
              <p className="mt-1 text-xs italic">
                Your well-being is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
