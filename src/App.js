// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp';
import StudentPage from './Components/StudentPage';
import TeacherPage from './Components/TeacherPage';
import AdminPage from './Components/AdminPage';
import Test from './Components/Test';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Studentpage" element={<StudentPage />} />
          <Route path="/Teacherpage" element={<TeacherPage />} />
          <Route path="/Adminpage" element={<AdminPage />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
