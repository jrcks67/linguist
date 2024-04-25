import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Learn from './Components/Learn';
import Login from './Components/Login';
import Progress from './Components/Progress';
import About from './Components/About';
import SignUp from './Components/SignUp';
import CoursePage from './Components/CoursePage';
import Test from './Components/Test';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/learn/:courseid" element={<CoursePage/>} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>

  );
}

export default App;
