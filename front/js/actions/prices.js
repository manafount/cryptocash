/**
 * @fileOverview Cryptocurrency Price Fetching
 */

import axios from 'axios';

import {
  SERVER_TIMESTAMP_UPDATE,
} from '../constants/reducer-actions';

/**
 * Update server timestamp.
 *
 * @return {Function} The action handler.
 */
export const fetchBTCPrice = () => {
  return function(dispatch) {
    axios.get('/home/timestamp')
      .then((res) => {
        dispatch({
          type: SERVER_TIMESTAMP_UPDATE,
          timestamp: res.data.timestamp,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
