import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import Navbar from './Navbar';


class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Navbar />

        <UserForm />

      </div>
    )
  }
}

export default App;