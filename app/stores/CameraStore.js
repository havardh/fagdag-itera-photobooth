import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  PICTURE_UPDATED,
  PICTURE_TAKEN
} from '../constants/CameraConstants';

class CameraStore extends BaseStore {

  emitChange() {
    this.emit(PICTURE_UPDATED);
  }

  addChangeListener(callback) {
    this.on(PICTURE_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(PICTURE_UPDATED, callback);
  }

  getPath() {
    return this.path || '';
  }
}

let store = new CameraStore();

AppDispatcher.register(action => {

  switch (action.actionType) {
  case PICTURE_TAKEN:
    store.path = action.data.path;
    store.emitChange();
    break;
  }

});

export default store;