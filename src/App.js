import React, { useState } from 'react';
import './App.css'



function Todo({ todo, index, completeTodo, removeTodo}) {
  return <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
  className ='todo'> 
  {todo.text} 
  <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
  </div>
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
    },
    {
      text: 'Learn on Vue.js',
    },
    {
      text: 'Learn React Native',
    },
    {
      text: 'Learn QA Testing',
    },

  ])

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
 

  return(
    <div className= 'app'>
        <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo  key={index} 
          index ={index} 
          todo={todo} 
          completeTodo={completeTodo}
          removeTodo = {removeTodo}
          />
        ))}
        
        <TodoForm addTodo ={addTodo} />
 </div> 
      </div>
  )
}


export default App











