import React, { Component } from 'react';
import { getToDos, createTodo, updateTodo} from './fetch-utils';

class ToDos extends Component {
    state = {
        todos: [],
        newTodo: '',
    };
    componentDidMount = async () => {
        this.fetchTodos()
    };

    fetchTodos = async () => {
        const data = await getToDos(this.props.token);
        this.setState({ todos: data});
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const data = await createTodo(this.props.token, {
            to_do: this.state.newTodo,
            completed: false,
        });
        this.setState({newTodo: ''});
        // this.fetchTodos();
        this.setState((prevState) =>({ 
            todos: [...prevState.todos, data],
    }));
};

    handleCompleted = async (todo) => {
        todo.completed = !todo.completed;
        await updateTodo(this.props.token, todo)
        this.fetchTodos();
    };
    render() {
        return (
            <>
                <h1>To-Do List</h1>
                <section className='todo-list'>
                {this.state.todos.map((todo) => (
                    <ul className='to-do-list' key={todo.id}>
                        <li>
                            <input 
                                type='checkbox' 
                                checked={todo.completed}
                                onChange={() => this.handleCompleted(todo)}
                            ></input>
                            <label>{todo.to_do}</label>
                        </li>
                    </ul>
                ))}
                </section>
                <section className='new-todo'>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            value={this.state.newTodo}
                            type='text'
                            onChange={(e) =>
                            this.setState({ newTodo: e.target.value })}></input>
                        <button>Add</button>
                    </form>
                    </section>    
            </>
        )
    }
}

export default ToDos;