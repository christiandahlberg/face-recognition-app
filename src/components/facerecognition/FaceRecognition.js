import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
    const face_boxes = boxes.map((box, i) => {
        return <div className="bounding-box"
                    id={i}
                    key={i}
                    style={{top: box.topRow, 
                            right: box.rightCol, 
                            bottom: box.bottomRow,
                            left: box.leftCol}}>
                </div>
    })

	return (
    <div className='jcc flex ma'>
      <div className='absolute mt3 mb2'>
        <img id='inputimage' alt='' src={imageUrl} width='850px' heigh='auto'/>
        { face_boxes }
      </div>
    </div>
  );

} 

export default FaceRecognition;