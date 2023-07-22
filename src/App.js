import React from 'react';
import Sidebar from './components/sidebar';
import Router from './router';

function App() {

  return (
    <div className="App">
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <Router />
    </div>
  );
}

export default App;
