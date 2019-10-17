import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <UserForm />

      </div>
    )
  }
}

export default App;