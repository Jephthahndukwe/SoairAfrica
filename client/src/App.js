import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Components/HomePage/Home'
import Map from './Components/map';
import Footer from './Components/Footer';
import Courses from './Components/CoursePage/Courses'
import Event from './Components/EventsPage/Event';
import Student from './Components/StudentPage/Student';
import Contact from './Components/ContactPage/Contact';
import EnrollPage from "./Components/CoursePage/EnrollPage";


function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/Courses' element={ <Courses/> } />
            <Route path="/EnrollPage" element={ <EnrollPage/> } />
            <Route path='/Event' element={ <Event/> } />
            <Route path='Student' element={ <Student/> } />
            <Route path='/Contact' element={ <Contact/> } />
          </Routes>
            <Map/> 
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
