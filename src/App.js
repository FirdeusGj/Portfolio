import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Mainbody from './components/MainBody/Mainbody';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Mainbody/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
