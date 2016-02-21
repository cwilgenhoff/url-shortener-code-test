import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';
import update from 'react-addons-update';
import 'babel-polyfill';

class UrlStore extends ReduceStore {
  getInitialState() {
    return [];
  }

  reduce(state, action) {
    switch (action.type) {
      case constants.FETCH_URLS_SUCCESS:
        return action.payload.response.shortedUrls;

      case constants.SHORTEN_URL_SUCCESS:
        return update(this.getState(), { $push: [action.payload.response] });

      default:
        return state;
    }
  }
}

export default new UrlStore(AppDispatcher);
