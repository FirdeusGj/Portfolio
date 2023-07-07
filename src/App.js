import './App.css';
import Mainbody from './components/MainBody/Mainbody';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Technology from './components/Technology/Technology';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Mainbody/>
      <Projects/>
      <Technology/>
    </div>
  );
}

export default App;
