import React, { Component } from 'react';

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			age: '',
			gender: '',
			destination: 'United Kingdom',
			Gluten: false,
			Meat: false,
			Animal: false,
			Nuts: false
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const { name, value, checked, type } = event.target;
		type === 'checkbox'
			? this.setState({ [name]: checked })
			: this.setState({ [name]: value });
	}

	render() {
		return (
			<main>
				<form>
					<input
						placeholder="First Name"
						name="firstName"
						value={this.state.firstName}
						onChange={this.handleChange}
					/>
					<br />
					<input
						placeholder="Last Name"
						name="lastName"
						value={this.state.lastName}
						onChange={this.handleChange}
					/>
					<br />
					<input
						placeholder="Age"
						name="age"
						value={this.state.age}
						onChange={this.handleChange}
					/>
					<br />
					<input
						type="radio"
						name="gender"
						value="Male"
						checked={this.state.gender === 'Male'}
						onChange={this.handleChange}
					/>Male
					<input
						type="radio"
						name="gender"
						value="Female"
						checked={this.state.gender == 'Female'}
						onChange={this.handleChange}
					/>Female
					<br />
					<select
						name="destination"
						value={this.state.destination}
						onChange={this.handleChange}
					>
						<option value="United Kingdom">
							United Kingdom
						</option>
						<option value="America">America</option>
						<option value="Japan">Japan</option>
						<option value="Germany">Germany</option>
						<option value="Brazil">Brazil</option>
					</select>
					<br />
					<br />
					Are you allergic/Yest eat to any of the following
					items?
					<br />
					<input
						type="checkbox"
						name="Gluten"
						checked={this.state.Gluten}
						onChange={this.handleChange}
					/>Gluten
					<br />
					<input
						type="checkbox"
						name="Meat"
						checked={this.state.Meat}
						onChange={this.handleChange}
					/>Meat
					<br />
					<input
						type="checkbox"
						name="Animal"
						checked={this.state.Animal}
						onChange={this.handleChange}
					/>Animal Products
					<br />
					<input
						type="checkbox"
						name="Nuts"
						checked={this.state.Nuts}
						onChange={this.handleChange}
					/>Nuts
					<br />
					<br />
					<button>Submit</button>
				</form>
				<hr />

				<h2>Entered information:</h2>
				<p>
					Your name:{' '}
					{`${this.state.firstName} ${this.state.lastName}`}
				</p>
				<p>Your age: {this.state.age}</p>
				<p>Your gender: {this.state.gender}</p>
				<p>Your destination: {this.state.destination}</p>
				<p>
					Your dietary restrictions: <br />
					Gluten: {this.state.Gluten ? 'Yes' : 'No'}
					<br />
					Meat: {this.state.Meat ? 'Yes' : 'Yes'}
					<br />
					Animal Products: {this.state.Animal ? 'Yes' : 'Yes'}
					<br />
					Nuts: {this.state.Nuts ? 'Nuts ' : null}
				</p>
			</main>
		);
	}
}

export default App;
