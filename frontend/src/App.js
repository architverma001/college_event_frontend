import logo from './logo.svg';
import './App.css';

import SwipwerSlides from './components/SwiperSlides';
import HomePage from './pages/homepage/HomePage';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import TopColleges from './components/TopColleges';
function App() {
  return (
    <div className=''>
      <Navbar/>
      <SwipwerSlides/>
      <HomePage/>
      <TopColleges/>
      <Footer/>
    </div>
  );
}

export default App;
