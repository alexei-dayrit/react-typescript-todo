import React from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className='heading'>WhaToDo</h1>
      <InputField />
    </div>
  );
}

export default App;
