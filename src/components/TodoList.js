import React from 'react';
import Todo from './Todo.js';
import style from './TodoList.css';

const TodoList = props => {
  const listPart = props.arrayItems.map( element => 
    <Todo key={element.id} todoItem={element} removeTodoItem={props.removeTodoItem}/>
  )

  return (
    <ul className={style.TodoList}>{listPart}</ul>
  )
}

export default TodoList;