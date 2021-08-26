import React, { Component } from 'react';
import { getToDos, createTodo, updateTodo} from './fetch-utils';

class ToDos extends Component {
    state = {
        todos: []
    };
    componentDidMount = async () => {
        // this.fetchTodos()
        const data = await getToDos(this.props.token);
        this.setState({ todos: data });
    };

    // fetchTodos = async () => {
    //     const data = await getToDos(this.props.token);
    //     this.setState({ todos: data});
    // };

    handleSubmit = async (e) => {
        e.preventDefault();
        const data = createTodo(this.props.token, {
            description: this.state.newTodo,
            completed: false,
        });
        this.setState({newTodo: ''});
        // this.fetchTodos();
        this.setState((prevState) =>({ todos: [...prevState.todos, data]
        }))
    };

    handleCompleted = async (todo) => {
        const { completed, ...rest } = todo;
        const data = await updateTodo(this.props.token, {
            completed: !completed,
            ...rest,
        })
    };
    render() {
        return (
            <>
                <h1>To-Do List</h1>
                <section className='todo-list'>
                ${this.state.todos.map((todo) => (
                <ul className='to-do-item' key={todo.id}>
                    <li>
                        <input type='checkbox' 
                               checked={todo.completed}
                               onChange={() => this.handleCompleted}></input>
                        <label>{todo.description}</label>
                    </li>
                    ))}
                </ul>
                </section>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.newTodo}
                        type='text'
                        onChange={(e) =>
                        this.setState({})}></input>
                        <button>Add</button>
                    </form>
                    </section>    
            </>
        )
    }
}

export default ToDos;