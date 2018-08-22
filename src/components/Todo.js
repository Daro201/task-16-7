import React from 'react';
import style from './Todo.css';

const Todo = props => <li id={props.todoItem.id} className={style.TodoItem}
          onClick={() => props.removeTodoItem(props.todoItem.id)}>
        {props.todoItem.text}
      </li>

export default Todo;