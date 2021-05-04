import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import app from './reducers/index.js';

const initiateStore = () => createStore(app, composeWithDevTools());

const wrapper = createWrapper(initiateStore);

export default wrapper;
