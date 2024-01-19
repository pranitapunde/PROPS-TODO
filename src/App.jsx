import React, { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Form from './assets/components/Form'
import ListGroup from './assets/components/ListGroup'

const App = () => {

  const [dark,setDark] = useState(false)
  
  const  changeTheme = () => {
    if (dark) {
      setDark (false)
    }else {
      setDark(true)
    }
  }

  // DeleteTodo
  const [ todos, setTodos] = useState ([

    // { id : 1 , text : "Cold"},
    // { id : 2 , text : " Sleep"},
    // { id : 3, text : "Deep"},
    // { id : 4, text : "Repeat"},
  ])

const deleteTodo = (id) => {
 setTodos ( todos.filter (todo=>{
  if (todo.id !== id){
    return true
  }
 }))
}
  

// saveTodo

const savetodo = ( text) =>{
  const newTodo ={
    id : crypto.randomUUID (),
    text:text
  };

   setTodos ([ newTodo,...todos]);

};

// EditTodo


const [ edit, setEdit] = useState({

  todo:{},
  editMode: false,
})

// console.log ( edit)


const editTodo = (todo) => {
  // console.log(todo);
  setEdit ({
    todo : todo,
    editMode: true,
  })
}

// updateTodo
const updateTodo = (oldId, newText) => {
  setTodos ( 
    todos.map ((item) => 
    item.id === oldId ? {
      id : oldId, 
      text:newText} : item 
      )
  )
setEdit({
  todo:{},
  editMode : false,
})


}




  return (
    <>
      <Navbar  dark={ dark} changeTheme={changeTheme}/>
      <div className="main-container ">
        <div className="container p-5 my-5 shadow-lg w-50 ">
          <Form saveTodo={savetodo} edit= {edit} updateTodo={updateTodo}/>
          <ListGroup todos = { todos} deleteTodo ={ deleteTodo} editTodo = { editTodo}/>
        </div>


      </div>
    </>
  )
}

export default App
