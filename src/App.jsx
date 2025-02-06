import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "../src/pages/Home";
import SignUp from "../src/pages/SignUp";
import SignIn from "../src/pages/SignIn";
import Navbar from "../src/pages/Navbar";
import Courses from "../src/pages/Courses";
import CreateCourse from "../src/pages/Creatcourses";
import AdminSignup from './pages/AdminSignup';
import AdminSignin from './pages/AdminSignin';

function App() {
  return (
    <>
    <Router>
      <div className='min-h-screen bg-gray-50'>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/courses/:id" element={<Courses/>}/>
            <Route path="/admin/courses" element={<CreateCourse/>}/>
            <Route path="/admin/signup" element={<AdminSignup/>}/>
            <Route path="/admin/signin" element={<AdminSignin/>}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
