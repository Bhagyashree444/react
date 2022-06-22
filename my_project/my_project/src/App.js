import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './home';
import CoachRegister from './coach/register';

function App() {
  return (
    <div>
      <header>
        <div>
          {`WeCare`}
        </div>
        <div>
          {`Call Us 1234`}
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coach/register' element={<CoachRegister/>}></Route>
      </Routes>
      <footer>
        <div>
          {`Copyright`}
        </div>
      </footer>
    </div>
  );
}

export default App;
