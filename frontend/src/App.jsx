import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import NavBar from './components/NavBar';
import { useEffect } from 'react';



function App() {

  // -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    useEffect(() => {
      const checkMobileScreen = () => {
        if (window.innerWidth <= 768) { // Typical breakpoint for mobile
          alert("You're on a mobile device!");
          document.body.innerHTML = ''; // Clears the entire homepage content
        }
      };
  
      checkMobileScreen();
  
      // Optional: Add event listener to detect resizing
      window.addEventListener('resize', checkMobileScreen);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', checkMobileScreen);
      };
    }, []);
    // -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/send' element={<SendMoney />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
