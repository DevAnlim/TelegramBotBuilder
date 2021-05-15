import { combineReducers } from 'redux';
import dashboard from './dashboard';
import bot from './bot';
import apiKeyModal from './apiKeyModal';

const app = combineReducers({
  dashboard,
  bot,
  apiKeyModal,
});

export default app;
