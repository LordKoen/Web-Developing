import React, { useState, useEffect } from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import './App.css';
import DefaultRightSide from './DefaultRightSide';
import UtilitiesBar from './UtilitiesBar';
import SearchBar from './SearchBar';

function App() {
	const [ allNotes, setNotes ] = useState([]);
	const [ currentNote, setCurrentNote ] = useState('');
	const [ searchBar, setSearchBar ] = useState('');
	const [ searchBarArr, setSearchBarArr ] = useState([]);

	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem('notes'));
		setNotes(notes);
	}, []);

	useEffect(
		() => {
			setNotes((prevState) => {
				const goodNotes = prevState.filter((item) => {
					return item.title !== undefined;
				});
				return goodNotes;
			});
		},
		[ allNotes.length ]
	);

	useEffect(
		() => {
			return localStorage.setItem('notes', JSON.stringify(allNotes));
		},
		[ currentNote, allNotes.length, allNotes ]
	);

	// window.prompt = function(msg) {
	// 	console.log(msg)
	// };

	function handleClick(event) {
		const { id } = event.currentTarget;
		setSearchBar('');

		allNotes.forEach((item) => {
			if (+item.id === +id) {
				return setCurrentNote(item);
			} else if (+id === +currentNote.id) {
				console.log('sameid');
				return setCurrentNote('');
			}
		});
	}

	function handleChange(event) {
		const { value, id } = event.currentTarget;

		setCurrentNote((prevState) => {
			return { ...prevState, text: value };
		});

		setNotes(
			allNotes.map((item) => {
				if (+item.id === +id) {
					return currentNote;
				}
				return item;
			})
		);
	}

	function newNote() {
		setNotes((prevState) => {
			return [
				...prevState,
				{
					id: Math.random(),
					title: createNewTitle(),
					text: ''
				}
			];
		});
	}

	function deleteNote() {
		setNotes((prevState) => {
			const newArr = prevState.filter((item) => {
				return item.id !== currentNote.id;
			});
			return newArr;
		});
	}

	function deleteAllNotes() {
		setNotes([]);
		setCurrentNote('');
	}

	function createNewTitle() {
		let title = prompt('What is the title of the new note?');

		if (title === '' || title === null || title === undefined) {
			return undefined;
		} else {
			return title;
		}
	}

	function handleSearchBarChange(event) {
		const { value } = event.target;

		setSearchBar(value);

		let search = allNotes.filter((item) => {
			return item.title.toLowerCase().startsWith(value);
		});

		setSearchBarArr(search);
	}

	let titles = allNotes.map((item) => {
		return (
			<div key={item.id} id={item.id} onClick={handleClick}>
				<LeftSide
					title={item.title}
					currentNote={currentNote}
					id={item.id}
				/>
			</div>
		);
	});

	let searchResults = searchBarArr.map((item) => {
		return (
			<div key={item.id} id={item.id} onClick={handleClick}>
				<LeftSide
					title={item.title}
					currentNote={currentNote}
					id={item.id}
				/>
			</div>
		);
	});

	return (
		<div className="mainDiv">
			<UtilitiesBar
				newNote={newNote}
				deleteNote={deleteNote}
				deleteAllNotes={deleteAllNotes}
			/>
			<div className="leftSideContainer">
				<SearchBar
					searchBarChange={handleSearchBarChange}
					value={searchBar}
				/>
				<h4 id="notesHeading">Notes:</h4>
				{searchBar != '' ? searchResults : titles}
			</div>
			{currentNote !== '' ? (
				<RightSide
					id={currentNote.id}
					text={currentNote.text}
					handleChange={handleChange}
				/>
			) : (
				<DefaultRightSide />
			)}
		</div>
	);
}

export default App;
