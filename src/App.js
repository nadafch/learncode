import HeroSection from './components/HeroSection';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import AppFeatures from './components/AppFeatures';
// import Login from './components/Login';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {/* <Login /> */}
      <AppFeatures />
      <Footer />
    </div>
  );
}

export default App;
