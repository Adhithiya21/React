import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import New from './New';
import Second from './Second';

import Parent from './Parent';
import Taleopp from './taleopp';
import Bike from './bike';
import { Map } from './map';
import Map1 from './map1';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Count } from './Count';
import Add from './Add';
import ToggleButton from './ToggleButton';
import Fetch from './Fetch';
import Weather from './Weather';
import RotatingCloud from './Rotaitingcloud';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/path' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/opreation' element={<Count/>}></Route>
    <Route path='/numbers' element={<Add/>}></Route>
    <Route path='/td' element={<ToggleButton/>}></Route>

    <Route path='/fetch' element={<Fetch/>}></Route>
    <Route path='/takle' element={<Weather/>}></Route>
    <Route path='/temp' element={<RotatingCloud/>}></Route>



    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
