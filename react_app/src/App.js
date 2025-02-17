import './App.css';
import Home from './component/pages/Home.js';
import SignIn from './component/pages/SignIn.js';
import SignUp from './component/pages/SignUp.js';
import NotFound from './component/pages/NotFound.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
