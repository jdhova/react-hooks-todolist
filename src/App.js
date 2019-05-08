import React, { useState } from 'react';
import './App.css'



function Todo({ todo, index}) {
  return <div className ='todo'> {todo.text} </div>
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    if(!value)  return
    e.preventDefault()
    addTodo(value)
    setValue('')

  }

  const handleChange = (e) => {
    setValue(e.target.value)
    
  }


 

  return(
    <form onSubmit = {handleSubmit} >
      <input type = 'text' placeholder = 'add todo' className= 'input' value={value} onChange = {handleChange} />
      
      {/* // {e => setValue(e.target.value)} /> */}

    </form>
  )
}

function App(){
  
  const [todos, setTodos] = useState ([

    {
      text: 'learn Python',
      isCompleted: 'false'
    },
    {
      text: 'Learn on Vue.js',
      isCompleted: 'false'
    },
    {
      text: 'Learn React Native',
      isCompleted: 'false'
    },
    {
      text: 'Learn QA Testing',
      isCompleted: 'false'
    },

  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return(
    <div className= 'app'>
        <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo  key={index} index ={index} todo={todo} 
          />
        ))}
        
        <TodoForm addTodo ={addTodo} />
 </div> 
      </div>
  )
}


export default App











