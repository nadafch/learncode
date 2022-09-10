
import Home from './components/Home';
import Login from './components/Login';
import Input from './components/Input';
import Foot from './components/foot';
import FourZeroFour from './components/FourZeroFour';
import { Route, Routes } from 'react-router-dom';
import "./styles/style.css"
import Dashboard from './components/Dashboard';
import React from 'react';
import LearnUser from './components/LearnUser';
import LearnPage from './components/LearnPage';
import NavBar from './components/NavBar';



function App() {
  return (
    <React.Fragment>
      <NavBar />
      <LearnUser />
      <LearnPage />
      <Foot />
    </React.Fragment>
    
    

    // <React.Fragment>
    //   <Routes>
    //     <Route path='/' element={
    //       <Home/>
    //     } exact />
    //     <Route path='/Login' element={<Login/>}/>
    //     <Route path='/Dashboard' element={<Dashboard/>}/>
    //     <Route path='/Input' element={<Input/>}/>
    //     <Route path='*' element={FourZeroFour}/>
    //   </Routes>
    //   <Foot/>
    // </React.Fragment>
  )
}

export default App;
