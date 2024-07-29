import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home  from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import Topbar from './components/Topbar';

function App() {
  return (
    <div>
      <Router>
        <Topbar/>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/info" Component={Info}></Route>
      </Routes>
    </Router>
    </div>
    
  );
};

export default App;
