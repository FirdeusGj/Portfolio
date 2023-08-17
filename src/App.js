import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
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
      <Contact/>
    </div>
  );
}

export default App;
