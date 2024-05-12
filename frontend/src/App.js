import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import Home from './Components/Home/Home';
import Learn from './Components/CourseList/Learn';
import Login from './Components/Login/Login';
import Progress from './Components/CourseContent/Progress';
import About from './Components/Home/About';
import SignUp from './Components/Login/SignUp';
import CoursePage from './Components/CourseContent/CoursePage';
import Test from './Components/CourseContent/Test';
import ProtectedRoutes from './Components/Login/ProtectedRoutes';
import Confirm from './Components/Login/Confirm';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirm" element={<Confirm/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/learn" element={<Learn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/learn/:courseid" element={<CoursePage/>} />
          <Route path="/test" element={<Test />} />   
        </Route>    
      </Routes>
    </Router>
  </Provider>
  );
}

export default App;
