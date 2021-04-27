import { } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/">
              <Home />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/About">
          <About />
        </Route>  
      </Switch>
    </div>
  );
}

export default App;
