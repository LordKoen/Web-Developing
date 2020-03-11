import React from 'react';
import './TodoApp.css';

class TodoItem extends React.Component {
	render() {
		return (
			<div className="todoItem">
				<input
					type="checkbox"
					name=""
					id=""
					className="checkbox"
					checked={this.props.item.completed}
					onChange={() =>
						this.props.handleChange(this.props.item.id)}
				/>
				<span
					className={
						this.props.item.completed ? 'completedStyle' : null
					}
					id="margin"
				>{`${this.props.item.text}`}</span>
			</div>
		);
	}
}

export default TodoItem;
