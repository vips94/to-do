import GetStarted from './pages/GetStarted';
import Home from './pages/Home';
import Todo from './pages/Todo';
import {BrowserRouter as Router,} from "react-router-dom";
import PolygonsBg from './components/Polygons/PolygonsBg';

function App() {
  return (
    <div className="App">
      <PolygonsBg/>
       <Router basename="/to-do">
          <Home/>
          <GetStarted/>
          <Todo/>
       </Router>
       
    </div>
  );
}

export default App;
