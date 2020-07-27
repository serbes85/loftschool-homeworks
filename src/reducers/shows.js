import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showSuccess, showFailure } from '../actions';

const results = handleActions(
  {
    [showRequest]: () => [],
    [showSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
);
const error = handleActions(
  {
    [showRequest]: () => null,
    [showFailure]: () => false
  },
  null
);

export default combineReducers({
  results,
  isLoading,
  error
});

export const getResults = state => state.shows.results;
export const getIsLoading = state => state.shows.isLoading;
export const getError = state => state.shows.error;
