import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '.App'
import search from './search.js'

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default Routing
