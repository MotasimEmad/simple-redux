import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducres from './reducers'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(reducres, enhancer(applyMiddleware(reduxThunk)));


export default store;