import logo from './logo.svg';
import './App.css';

import SwipwerSlides from './components/SwiperSlides';
import HomePage from './pages/homepage/HomePage';
import Footer from './components/footer/Footer';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import TopColleges from './pages/TopColleges';
function App() {
  return (
    <div>
      <BrowserRouter>
=======
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className=''>
>>>>>>> 7fa10a3355ba012e8cddea9272e1b39bda42abd6
      <Navbar/>
      <SwipwerSlides/>
      <HomePage/>
      <TopColleges/>

      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
