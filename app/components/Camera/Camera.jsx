import React from 'react';

export default class Camera extends React.Component {

  takePicture() {
    console.log('flash');
  }

  render() {
    return (
      <div>
         <img src=""></img>
         <button onClick={this.takePicture}>
            Take picture
        </button>
      </div>
    );
  }

}
