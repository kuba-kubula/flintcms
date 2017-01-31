import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import io from 'socket.io-client';

const socket = io();

// Combine reducers into one, easily ingestible file
// which is then imported into the Redux store
// ----
// Create an empty object to avoid extra reducers
// recipes: (state = {}) => state,
const rootReducer = combineReducers({
  socket: (state = socket) => state,
  routing: routerReducer,
});

export default rootReducer;
