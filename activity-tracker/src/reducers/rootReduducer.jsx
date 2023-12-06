import {combineReducers} from "redux";
import activitiesReducer from "./activitiesReducer";

const rootReducer = combineReducers ({ //combine รวมร่างกัน
    activities: activitiesReducer,
});

export default rootReducer;