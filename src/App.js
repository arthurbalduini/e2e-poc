import './App.css';

import LabelChanger from './components/label-changer';
import MyForm from './components/my-form';
import React from 'react';

function App() {
  return (
    <div className="App">
      <MyForm/>
      <LabelChanger />
    </div>
  );
}

export default App;
