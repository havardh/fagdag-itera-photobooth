import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';

import Camera from '../Camera/Camera';

/*
function getAppState() {
  return {
    items: ItemsStore.getAll()
  };
}
*/

export default class App extends React.Component {

  //state = getAppState()

  componentDidMount() {
    //ItemsStore.addChangeListener(this.onChange);
    //AppActions.getItems();
  }

  componentWillUnmount() {
    //ItemsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    //this.setState(getAppState());
  }

  render() {
    return (
      <div className={styles.app}>
        <Camera />
      </div>
    );
  }
}
