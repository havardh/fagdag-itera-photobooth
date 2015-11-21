import AppDispatcher from '../dispatcher/AppDispatcher';

import CameraService from '../services/CameraService';

export default {

  takePicture() {
    CameraService.takePicture()
  }

};