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

  hasPicture() {
    return !!this.state.path;
  }

  renderCamera() {
    return (
      <div>
         <button onClick={takePicture}>Take picture</button>
      </div>
    );
  }

  renderSaveOrDelete() {
    return (
      <div>
        <img src={this.state.path}></img>
        <button onClick={() => savePicture(this.state.path)}>Save picture</button>
        <button onClick={() => deletePicture(this.state.path)}>Delete picture</button>
      </div>
    );
  }

  render() {
    if (!this.hasPicture()) {
      return this.renderCamera();
    } else {
      return this.renderSaveOrDelete();
    }
  }
}
