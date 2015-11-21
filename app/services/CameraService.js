import Promise from 'bluebird';
import superagent from 'superagent';
import _ from 'lodash';

Promise.promisifyAll(superagent);

const Method = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'del'
};

function request(options) {
  return new Promise((resolve, reject) => {
    options = _.defaults(options || {}, {
      type: 'json',
      method: Method.GET,
      contentType: 'application/json'
    });

    let reqObj = superagent[options.method](options.url);
    if (typeof options.data !== 'undefined') {
      reqObj = reqObj.send(options.data);
    } else {
      reqObj = reqObj.send('');
    }

    reqObj
      .set('Content-Type', options.contentType)
      .set('Accept', 'application/json')
      .endAsync()
      .then(response => {
        resolve(JSON.parse(response.text));
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default {

  takePicture () {
    return request({
      url: 'camera/takePicture'
    }).catch(error => {
      console.log(error);
    });
  }

};