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

  render() {
    return (
      <div>
         <img src={this.state.path}></img>
         {!this.hasPicture() ? <button onClick={takePicture}>Take picture</button> : false }
         {this.hasPicture() ? <button onClick={savePicture}>Save picture</button> : false }
         {this.hasPicture() ? <button onClick={deletePicture}>Delete picture</button> : false}
      </div>
    );
  }
}
