import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey

const isAuthorized = handleActions(
  {
    [addApiKey]: () => true
  },
  false
);
const apiKey = handleActions(
  {
    [addApiKey]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isAuthorized,
  apiKey
});

export const getIsAuthorized = state => state.auth.isAuthorized;
export const getApiKey = state => state.auth.apiKey;
