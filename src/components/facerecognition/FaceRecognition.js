import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	let arrBox = box
	console.log(typeof box);
	console.log(box)
	console.log(Object.entries(box))

    //const face_boxes = arrBox.map((box, i) => {
    //    return <div className="bounding-box"
    //                id={i}
    //                key={i}
    //                style={{top: box.top_row, 
    //                        right: box.right_col, 
    //                        bottom: box.bottom_row,
    //                        left: box.left_col}}>
    //            </div>
    //})

	return (
    <div className='jcc flex ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='850px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );

} 

export default FaceRecognition;