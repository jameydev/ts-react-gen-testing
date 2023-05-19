import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import SideMenu from './components/SideMenu';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <SideMenu />
      {/* <Button /> */}
    </div>
  );
}

export default App;
