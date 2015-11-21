import AppDispatcher from '../dispatcher/AppDispatcher';

import {PICTURE_TAKEN} from '../constants/CameraConstants';

import CameraService from '../services/CameraService';



export default {

  takePicture() {
    CameraService.takePicture()
      .then(data => {
        console.log(data);
        AppDispatcher.dispatch({
          actionType: PICTURE_TAKEN,
          data: data
        });
      });
  }
};