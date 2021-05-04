import { combineReducers } from 'redux';
import dashboard from './dashboard';
import bot from './bot';

const app = combineReducers({
  dashboard,
  bot,
});

export default app;
