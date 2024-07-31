import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './sidebar/dashboard';
import StudentList from './pages/studentList';

function App() {
  return (
    <Router>
      <Dashboard />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/studentList" element={<StudentList />} />
      </Routes>
    </Router>

  );
}

export default App;

