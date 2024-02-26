// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp';
import StudentPage from './Components/StudentPage';
import TeacherPage from './Components/TeacherPage';
import AdminPage from './Components/AdminPage';
import Datastructures from './Components/Quiz/DataStructures';
import Coding from './Components/Quiz/Coding';
import Dbms from './Components/Quiz/Dbms';
import Designprinciples from './Components/Quiz/DesignPrinciples';
import Home from './Components/Home';
import AddQuestionForm from './Components/AddQuestionForm';
import PendingApproval from './Components/PendingApproval';
import ExportQuiz from './Components/ExportQuiz';
import PreviewQuiz from './Components/PreviewQuiz';
import SubTopics from './Components/SubTopics';
function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Studentpage" element={<StudentPage />} />
          <Route path="/Studentpage/Quiz/DataStructures" element={<Datastructures />} />
          <Route path="/Studentpage/Quiz/Coding" element={<Coding />} />
          <Route path="/Studentpage/Quiz/DBMS" element={<Dbms />} />
          <Route path="/Studentpage/Quiz/DesignPrinciples" element={<Designprinciples />} />
          <Route path="/Teacherpage" element={<TeacherPage />} />
          <Route path="/Adminpage" element={<AdminPage />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/Adminpage/AddQuestion" element={<AddQuestionForm />} />
          <Route path="/Adminpage/PendingApproval" element={<PendingApproval />} />
          <Route path="/ExportQuiz" element={<ExportQuiz />} />
          <Route path="/PreviewQuiz" element={<PreviewQuiz />} />
          <Route path="/SubTopics" element={<SubTopics />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
