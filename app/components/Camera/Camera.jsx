import React from 'react';

import CameraStore from '../../stores/CameraStore';

import {
  takePicture,
  savePicture,
  deletePicture
} from '../../actions/CameraActions';

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
    return (
      <div>
         <img src={this.state.path}></img>
         <button onClick={takePicture}>Take picture</button>
         <button onClick={savePicture}>Save picture</button>
         <button onClick={deletePicture}>Delete picture</button>
      </div>
    );
  }
}
