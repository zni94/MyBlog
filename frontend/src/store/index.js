import {combineReducers} from "redux";
import togglePages from "./src/togglePages";
import toggleModal from "./src/toggleModal";
import navItems from "./src/navItems";

const rootReducer = combineReducers({
    togglePages,
    toggleModal,
    navItems,
});

export default rootReducer;