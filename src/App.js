import React, { useState } from 'react';
import './App.css'


function Todo({ todo, index}) {
  return <div className='todo'>{todo.text}</div>
}


function App()
    {
  const [todos, setTodos ] = useState ([

    { 
      text: 'Learn JavaScript Algorithm and Data Strictures',
      isCompleted: false
    },
    { 
      text: 'Build Vue.js Application',
      isCompleted: false
    },
    { 
      text: 'Learn Python',
      isCompleted: false
    },
    { 
      text: 'Build app with React Native',
      isCompleted: false
    },

  ])
   return (
     <div className='app'>
      <div className='todo-list'>
          {todos.map((todo,index) => (
            <Todo key={index}  index={index} todo={todo}/>
          ))}
      </div>
     </div>
   )
}

export default App











// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
