import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  PICTURE_TAKEN,
  PICTURE_SAVED,
  PICTURE_DELETED,
} from '../constants/CameraConstants';

import CameraService from '../services/CameraService';



export default {

  takePicture() {
    CameraService.takePicture()
      .then(data => {
        AppDispatcher.dispatch({
          actionType: PICTURE_TAKEN,
          data: data
        });
      });
  },

  savePicture(file) {
    CameraService.savePicture(file)
      .then(data => {
        AppDispatcher.dispatch({
          actionType: PICTURE_SAVED,
          data: data
        });
      });
  },

  deletePicture(file) {
    CameraService.deletePicture(file)
      .then(data => {
        AppDispatcher.dispatch({
          actionType: PICTURE_DELETED,
          data: data
        });
      });
  }
};