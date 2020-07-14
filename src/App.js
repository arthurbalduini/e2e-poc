import './App.css';

import EmailContextProvider from './context/email'
import LabelChanger from './components/label-changer';
import MyForm from './components/my-form';
import React from 'react';
import WhatsMyEmailButton from './components/whats-my-email';

function App() {
  return (
    <EmailContextProvider>
      <div className="App">
        <MyForm />
        {/* <LabelChanger /> */}
        <WhatsMyEmailButton />
      </div>
    </EmailContextProvider>
  );
}

export default App;
