import { combineReducers } from 'redux';
import bot from './bot';

const app = combineReducers({
  bot,
});

export default app;
