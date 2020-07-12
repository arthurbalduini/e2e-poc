import './App.css';

import EmailContextProvider from './context/email'
import LabelChanger from './components/label-changer';
import MyForm from './components/my-form';
import React from 'react';

function App() {
  return (
    <EmailContextProvider value="teste">
      <div className="App">
        <MyForm />
        <LabelChanger />
      </div>
    </EmailContextProvider>
  );
}

export default App;
