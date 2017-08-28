/**
 * @fileOverview The root reducer, combines all reducers.
 */

import { combineReducers } from 'redux';

import serverTimestamp from './server-timestamp';

export default combineReducers({
  serverTimestamp,
});
