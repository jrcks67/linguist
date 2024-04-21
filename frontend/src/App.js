import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Learn from './views/Learn';
import Login from './views/Login';
import Test from './views/Test';
import Progress from './views/Progress';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/test" element={<Test />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Router>

  );
}

export default App;
