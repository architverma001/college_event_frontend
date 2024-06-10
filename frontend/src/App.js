import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SwipwerSlides from './components/SwiperSlides';
import HomePage from './pages/homepage/HomePage';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import TopColleges from './pages/TopColleges';
function App() {
  return (
    <div>
      <BrowserRouter>
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
