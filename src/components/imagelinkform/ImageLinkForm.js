import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className="tc pa2">
			<p 
				className="f3 black-70 fw5 pb3 mt0">
			{'This brain up there to the left... you see it? It will detect faces in your pictures. Give it a try below!'}
			</p>
			<div className="center">
				<input 
					type="text" 
					className="pa3 w-50 b--none br2 bg-light-gray shadow-4"
					placeholder="Put your image URL here to visualize"
					onChange={onInputChange}/>
				<button 
					type="button"
					className="br3 fw6 shadow-4 dim black-70 ml3 pa3 ttu b--none link"
					onClick={onButtonSubmit}>
				{'Detect'}
				</button>
			</div>
		</div>
	)
}

export default ImageLinkForm;
