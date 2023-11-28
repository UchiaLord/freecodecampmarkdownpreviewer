import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MarkDownPreview from './components/inc/markdownpreview';

const App = () => {
  return (
    <div className="app">
      <Router>
        <MarkDownPreview />
      </Router>
      
    </div>
  );
};

export default App;