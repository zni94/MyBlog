import {combineReducers} from "redux";
import togglePages from "./src/togglePages";
import toggleModal from "./src/toggleModal";
import navItems from "./src/navItems";
import toggleWeb from "./src/toggleWeb";

const rootReducer = combineReducers({
    togglePages,
    toggleModal,
    toggleWeb,
    navItems,
});

export default rootReducer;