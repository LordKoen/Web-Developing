import React from 'react';
import './App.css';

function SearchBar(props) {
	return (
		<form
			id="searchBarForm"
			onSubmit={(event) => event.preventDefault()}
		>
			<input
				className="searchBarInput"
				type="text"
				placeholder="Search"
				onChange={props.searchBarChange}
				value={props.value}
			/>
		</form>
	);
}

function SearchBar(props) {
	return (
		<form
			id="searchBarForm"
			onSubmit={(event) => event.preventDefault()}
		>
			<input
				className="searchBarInput"
				type="text"
				placeholder="Search"
				onChange={props.searchBarChange}
				value={props.value}
			/>
		</form>
	);
}


export default SearchBar;
