import React from 'react';

import {takePicture} from '../../actions/CameraActions';
import CameraStore from '../../stores/CameraStore';


function getCameraState() {
  return {
    path: CameraStore.getPath()
  };
}

export default class Camera extends React.Component {

  state = getCameraState();

  componentDidMount() {
    CameraStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CameraStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getCameraState());
  }

  render() {
    console.log(this.state.path);
    return (
      <div>
         <img src={this.state.path}></img>
         <button onClick={takePicture}>Take picture</button>
      </div>
    );
  }

}
