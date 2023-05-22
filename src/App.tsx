import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import SideMenu from './components/SideMenu';
import SideBar from './components/SideBar';
import Form from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <SideBar />
      <SideMenu />
      <Form />
      {/* <Button /> */}
    </div>
  );
}

export default App;
