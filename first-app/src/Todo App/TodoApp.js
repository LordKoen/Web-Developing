import React from 'react';
import './TodoApp.css';
import todosData from './todosData';

import TodoItem from './TodoItem';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todosData
		};
		this.handleChange = this.handleChange.bind(this);
		this.deleteTasks = this.deleteTasks.bind(this);
	}

	handleChange(id) {
		this.setState((prevState) => {
			const newObject = prevState.todos.map((item) => {
				if (item.id === id) {
					item.completed = !item.completed;
				}
				return item;
			});
			return { todos: newObject };
		});
	}

	deleteTasks() {
		this.setState({
			todos: []
		})
	}

	render() {
		const todoComponents = this.state.todos.map((item) => (
			<TodoItem
				item={item}
				key={item.id}
				handleChange={this.handleChange}
			/>
		));

		return (
			<div className="container">
				<h1 className="h1 ">Todo List</h1>
				{todoComponents}
				<br />
				<button onClick={this.deleteTasks}>Delete all tasks</button>
			</div>
		);
	}
}

export default App;
