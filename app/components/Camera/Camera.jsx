import React from 'react';

import {takePicture} from '../../actions/CameraActions';

export default class Camera extends React.Component {

  render() {
    return (
      <div>
         <img src="picture.jpg"></img>
         <button onClick={takePicture}>
            Take picture
        </button>
      </div>
    );
  }

}
