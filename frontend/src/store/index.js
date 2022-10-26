import { combineReducers } from 'redux';
import togglePages from './src/togglePages';
import toggleModal from './src/toggleModal';
import navItems from './src/navItems';
import toggleItems from './src/toggleItems';
import toggleLogon from './src/toggleLogon';

const rootReducer = combineReducers({
  togglePages,
  toggleModal,
  toggleItems,
  toggleLogon,
  navItems,
});

export default rootReducer;
