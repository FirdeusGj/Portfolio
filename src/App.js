import './App.css';
import Mainbody from './components/MainBody/Mainbody';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Mainbody/>
      <Projects/>
    </div>
  );
}
export default App;
