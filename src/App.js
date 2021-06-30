
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ImageDisplay from './components/ImageDisplay/ImageDisplay'
import Logo from './components/Logo/Logo';
import Footer from './components/Footer/Footer';
import OurServices from './components/OurServices/OurServices';
import Welcome from './components/WelcomContent/Welcome'
import Cards from './components/Cards/Cards'
function App() {
  return (
    <div className="App">
    <NavBar />
    <Logo />
      <ImageDisplay />
      <Welcome />
      <hr></hr>
      <OurServices />
      <div className="cards_container">
      <Cards />
      <Cards />
      <Cards />
      </div>
    <Footer />
    </div>
  );
}

export default App;
