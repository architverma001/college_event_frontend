import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SwipwerSlides from './components/SwiperSlides';
import HomePage from './pages/homepage/HomePage';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <SwipwerSlides/>
      <HomePage/>

      <Footer/>
    </div>
  );
}

export default App;
