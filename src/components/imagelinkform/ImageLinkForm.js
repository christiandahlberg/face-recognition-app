import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
	return (
		<div className="tc pa2">
			<p 
				className="f3 black-70 fw5 pb3 mt0">
			{'This brain up there to the left... you see it? It will detect faces in your pictures. Give it a try below!'}
			</p>
			<div className="center">
				<input 
					id="inputForm"
					type="text" 
					className="pa2 pv3 input-reset ba bg-transparent hover-bg-black hover-white w-50 shadow-4"
					placeholder="Put your image URL here to visualize"
					onChange={onInputChange}/>
				<button 
					type="button"
					className="b br2 pv3 ph4 ml3 input-reset ba b--black bg-transparent grow pointer f5 dib shadow-4"
					onClick={onImageSubmit}>
				{'Detect'} 
				</button>
			</div>
		</div>
	)
}

export default ImageLinkForm;
