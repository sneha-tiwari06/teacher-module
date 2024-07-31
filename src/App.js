import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './sidebar/dashboard';
import StudentList from './pages/studentList';
import StudentProfile from './pages/student-profile';
import AddStudents from './pages/add-students';

function App() {
  return (
    <Router>
      <div className='row w-100'>
        <div className='col-md-2'>
          <Dashboard />
        </div>
        <div className='col-md-10 content'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/studentList" element={<StudentList />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route path="/student-profile/:id" element={<StudentProfile />} />
            <Route path="/add-students" element={<AddStudents />} />
          </Routes>

        </div>
      </div>
    </Router>




  );
}

export default App;

