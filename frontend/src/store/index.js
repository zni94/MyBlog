import { combineReducers } from 'redux';
import togglePages from './src/togglePages';
import navItems from './src/navItems';
import toggleItems from './src/toggleItems';
import toggleLogon from './src/toggleLogon';

const rootReducer = combineReducers({
  togglePages,
  toggleItems,
  toggleLogon,
  navItems,
});

export default rootReducer;
