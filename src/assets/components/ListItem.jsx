 import React from 'react'
 import { MdDelete } from "react-icons/md";
 import { MdEdit } from "react-icons/md";

const ListItem = ( { todo, deleteTodo , editTodo})  => {

  

  return (
    <li className='list-group-item  rounded-0 my-1 '>
      { todo.text}
      <button className='btn btn-sm btn-danger rounded-0 float-end mx-1'onClick={ () => deleteTodo(todo.id) } > { <MdDelete />}</button>
      <button className='btn btn-sm btn-warning rounded-0 float-end' onClick={ () => editTodo(todo)}> { <MdEdit />}</button>


    </li>
  )
}

export default ListItem
