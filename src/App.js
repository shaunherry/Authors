import React from 'react';
import './App.css';
import Main from './views/Main';
import AddAuthor from './components/AddAuthor';
import { Router } from '@reach/router';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <h1>International Authors Database</h1>
      <Router>
      <Main path="/" />
      <AddAuthor path="/user/new" />
      <Edit path="/users/:id" />
      </Router>
    </div>
  );
}

export default App;
