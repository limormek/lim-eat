import { createStore } from 'redux';
import restaurantsReducer from '../reducers/restaurantsReducer';

const configureStore = (railsProps) => (
  createStore(restaurantsReducer, railsProps)
);

export default configureStore;
