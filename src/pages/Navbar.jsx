import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Menu, X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = (props) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logOut = () => {
    if (!localStorage.getItem("token") && localStorage.getItem("userToken") === null) {
      toast.warn("Login first!!", { position: "top-center", autoClose: 1000});
      // console.log(localStorage);
      // console.log(props);
      setTimeout(() => navigate("/signin"), 2000);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("admin");
      localStorage.removeItem("userToken");
      // if (!localStorage.getItem("AdminName")) {
      //   toast.success("Logout successfull...", { position: "top-center", autoClose: 1000 })
      // } else {
      //   toast.success(`${localStorage.getItem("AdminName")} logout successfull...`, { position: "top-center", autoClose: 1000 });
      // }
      localStorage.removeItem("AdminName");
      toast.success("Logout successfull...", { position: "top-center", autoClose: 1000 })
      props.setIsAdmin(false);
      // console.log(localStorage);
      setTimeout(() => navigate("/"), 2000);
    }
  }

  return (
    <div className="bodyAll">
      <div className="bg-white shadow-md fixed top-0 left-0 w-full z-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">LearnHub</span>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/signin" className="text-gray-700 hover:text-indigo-600">SignIn</Link>
              <Link
                to="/signup"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-150"
              >
                SignUp
              </Link>
              <button
                onClick={logOut}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
              >
                Logout
              </button>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none cursor-pointer"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-3">
          <Link
            to="/signin"
            className="block text-gray-700 hover:text-indigo-600 py-2 mt-20 ml-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-150"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </Link>
          <button
            onClick={logOut}
            className="block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
          >
            Logout
          </button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Navbar;
