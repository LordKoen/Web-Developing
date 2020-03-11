import React from 'react';
import './MyTodoApp.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			value: '',
			todos: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleButtons = this.handleButtons.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let id = Math.random() * Math.random();
		console.log(id)
		this.setState((prevState) => ({
			todos: [
				...prevState.todos,
				{ id: id, text: this.state.value, isCompleted: false }
			]
		}));
		this.setState({ value: '' });
	}

	handleChange(event) {
		const { value, type, id } = event.target;
		if (type === 'checkbox') {
			this.setState((prevState) => {
				const changeState = prevState.todos.map((item) => {
					if (item.id === +id) {
						item.isCompleted = !item.isCompleted;
					}
					return item;
				});
				return { todos: changeState };
			});
		} else {
			this.setState({ value: value });
		}
	}

	handleDelete(event) {
		const { id } = event.target;
		localStorage.removeItem('todos');
		this.setState((prevState) => {
			const changeState = prevState.todos.filter((item) => {
				return +item.id !== +id;
			});
			return { todos: changeState };
		});
	}

	handleButtons(event) {
		const { id } = event.target;
		if (id === 'deleteAll') {
			this.setState({ todos: [] });
		} else if (id === 'completeAll') {
			this.setState((prevState) => {
				const completeAll = prevState.todos.map((item) => {
					if (!item.isCompleted) {
						item.isCompleted = !item.isCompleted;
					}
					return item;
				});
				return { todos: completeAll };
			});
		} else if (id === 'deleteAllCompleted') {
			this.setState((prevState) => {
				const nonCompleted = prevState.todos.filter((item) => {
					return item.isCompleted !== true;
				});
				return { todos: nonCompleted };
			});
		}
	}

	componentDidMount() {
		const localtodos = JSON.parse(localStorage.getItem('todos'));
		if (localtodos != null) {
			this.setState({ todos: localtodos });
		}
	}

	componentDidUpdate() {
		localStorage.setItem('todos', JSON.stringify(this.state.todos));
	}

	render() {
		let items = this.state.todos.map((item, index) => {
			return (
				<div
					className="todoItem"
					id={index === 0 ? 'firstItem' : null}
					key={index + 1}
				>
					<label>
						<input
							type="checkbox"
							checked={item.isCompleted}
							onChange={this.handleChange}
							id={item.id}
							className="checkbox"
						/>
						<span />
						<span
							className={
								item.isCompleted ? 'completedStyle' : null
							}
						>
							{item.text}
						</span>
					</label>

					<button
						className="deleteButton"
						onClick={this.handleDelete}
						id={item.id}
					/>
				</div>
			);
		});
		return (
			<div className="container">
				<h1>To-do list</h1>
				<form
					onSubmit={this.handleSubmit}
					id="form"
					autoComplete="off"
				>
					<input
						type="text"
						name="todoItem"
						value={this.state.value}
						onChange={this.handleChange}
						className="input"
						placeholder="What needs to be done?"
					/>
				</form>
				{items}
				<div className="buttons">
					<button
						id="deleteAll"
						className="buttonSet"
						onClick={this.handleButtons}
					>
						Delete All
					</button>
					<button
						id="deleteAllCompleted"
						className="buttonSet"
						onClick={this.handleButtons}
					>
						Delete All Completed
					</button>
					<button
						id="completeAll"
						className="buttonSet"
						onClick={this.handleButtons}
					>
						Complete All
					</button>
				</div>
			</div>
		);
	}
}

export default App;
