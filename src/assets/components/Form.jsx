import React, { useEffect, useState } from 'react'

const Form = ({saveTodo,edit, updateTodo })  => {

const [text,setText] = useState ("");

const handleSubmit = (e) => {

e.preventDefault ();

if(edit.editMode){
updateTodo(edit.todo.id , text )
}else{
  saveTodo (text);
}
setText("");
};

useEffect(() => {
  setText ( edit.todo.text);
} ,[edit]) 


  return (
    <form className='my-3 ' onSubmit = {(e) => handleSubmit(e)}>
        <input type='text' className='form-control rounded-0 my-3 w-100 d-flex ' 
        placeholder='Enter Todo Here..'
        onChange={(e) => setText(e.target.value)}
        value={text}
        required/>
        <button className='btn btn-success rounded-0 btn-sm w-100'> Save</button>
    </form>
  )
}

export default Form
