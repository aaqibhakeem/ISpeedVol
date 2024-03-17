import React from 'react'
import { UseUserContext } from './hooks/useUserContext';
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Pages/Login.js'
import Choice from './Pages/choice.js';
import SignUp from './Pages/SignUp.js';
import HireForm from './Pages/HireForm1.js';
import HomeHire from './Pages/homeVol.js'
import Navbar from './Components/Navbar.js'




function App() {
  const {user} = UseUserContext()
  return (
  <div className='app-div'>
  <Router>
    <Navbar />
    <Routes>
      <Route exact path='/login' element={!user ? <Login /> : <Choice />} />
      <Route exact path='/' element={<Choice />} />
      <Route exact path='/signup' element={!user ? <SignUp /> : <Choice />} />
      <Route exact path='/hireform' element={!user ? <Login /> : <HireForm />} />
      <Route exact path='/volunteer' element={!user ? <Login /> : <HomeHire/>} />
    </Routes>
  </Router>
  </div>);
}

export default App;