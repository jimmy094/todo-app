import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);


  return (
    <div className="App">
      <header>
      <h1>Jimmy's todo list</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      inputText={inputText}/>
      <Todolist 
      todos={todos} 
      setTodos={setTodos}
      />
    </div>
  );
}

export default App;
