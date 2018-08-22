import React from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';
import style from './App.css';
import TodoStyle from '../components/Todo.css'
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          text: 'clean room'
        },
        {
          id: 2,
          text: 'wash the dishes'
        },
        {
          id: 3,
          text: 'feed my cat'
        }
      ]
    };
  }

  addTodo = (val) => {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];

    this.setState({data});
  }

  removeTodo = (id) => {
    const remainder = this.state.data.filter(todo => todo.id !== id);
      this.setState({data: remainder});
   
  }



  render() {
    return (
      <div className={style.TodoApp}>
        <Title arrayItems={this.state.data} numberOfTasks={this.state.data.length}/>
        <TodoForm addingTodo={this.addTodo}/>
        <TodoList arrayItems={this.state.data} removeTodoItem={this.removeTodo}/>
      </div>
    );
  }
}

export default hot(module)(App);
