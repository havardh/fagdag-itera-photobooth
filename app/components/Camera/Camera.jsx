import styles from './_Camera.scss';

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

const streamPath = 'http://188.166.108.167:8091/?action=stream';

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
         <img className={styles.preview} src={streamPath} />
         <button className={styles.take} onClick={takePicture}>Take</button>
      </div>
    );
  }

  renderSaveOrDelete() {
    return (
      <div>
        <img className={styles.preview} src={this.state.path} />
        <button className={styles.save} onClick={() => savePicture(this.state.path)}>Save</button>
        <button className={styles.del} onClick={() => deletePicture(this.state.path)}>Delete</button>
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
