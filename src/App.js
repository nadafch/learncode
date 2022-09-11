
import Home from './components/Home';
import About from './components/Pages/About';
import Login from './components/login';
import Foot from './components/foot'
import FourZeroFour from './components/FourZeroFour';
import { Route, Routes } from 'react-router-dom';
import "./styles/style.css"
import Dashboard from './components/Dashboard';
import React from 'react';
import LearnUser from './components/LearnUser';
import LearnPage from './components/LearnPage';
import NavBar from './components/NavBar';
import SecondNav from './components/secondaryNav';



function App() {
  return (
    
    <React.Fragment>
      <Routes >
        <Route path='/' element={
          <Home/>
        } exact />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='*' element={FourZeroFour}/>
      </Routes>
      <Foot/>
    </React.Fragment>
  )
}

export default App;
