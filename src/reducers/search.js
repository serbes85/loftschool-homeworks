import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchRequest, searchSuccess, searchFailure } from '../actions';

const series = handleActions(
  {
    [searchRequest]: () => [],
    [searchSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);
const error = handleActions(
  {
    [searchRequest]: () => null,
    [searchFailure]: () => false
  },
  null
);

export default combineReducers({
  series,
  isLoading,
  error
});

export const getSeries = state => state.search.series;
export const getIsLoading = state => state.search.isLoading;
export const getError = state => state.search.error;
