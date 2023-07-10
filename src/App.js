import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Mainbody from './components/MainBody/Mainbody';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Technology from './components/Technology/Technology';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Mainbody/>
      <About/>
      <Technology/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
