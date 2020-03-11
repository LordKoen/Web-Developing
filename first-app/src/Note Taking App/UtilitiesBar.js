import React from 'react';
import './App.css';

function UtilitiesBar(props) {
	return (
		<div className="utilitiesBar">
			<button
				id="newNoteButton"
				className="button"
				onClick={props.newNote}
			>
				New Note
			</button>
			<button
				id="deleteButton"
				className="button"
				onClick={props.deleteNote}
			>
				Delete Note
			</button>
			<button
				id="deleteAllNotes"
				className="button"
				onClick={props.deleteAllNotes}
			>
				Delete all notes
			</button>
		</div>
	);
}

export default UtilitiesBar;
