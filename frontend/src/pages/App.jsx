import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkflowPage from './WorkflowPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkflowPage />} />
      </Routes>
    </Router>
  );
}

export default App;