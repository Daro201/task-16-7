import React from 'react';
import style from './TodoForm.css'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

 handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value.length >= 3) {
      this.props.addingTodo(this.state.value);
      this.state.value = '';
    }
  }

  render() {
    return (
     <form className={style.TodoForm} onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type='submit'>Add</button>
        </label>
      </form>
    )
  }
}

export default TodoForm;


