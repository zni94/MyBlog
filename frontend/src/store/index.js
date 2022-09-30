import {combineReducers} from "redux";
import togglePages from "./src/togglePages";
import toggleModal from "./src/toggleModal";

const rootReducer = combineReducers({
    togglePages,
    toggleModal,
});

export default rootReducer;