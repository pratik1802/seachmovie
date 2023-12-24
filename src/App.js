import React from 'react';
// import Home from './Home';
import './App.css'
import SingleMovie from './SingleMovie';
import Error from './Error';

import {BrowserRouter,Routes,Route} from 'react-router-dom';


import Home from "./Home";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<SingleMovie/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
