import  { todoreducers }  from "./reducers";
import  changeTheNumber  from "./upDown";
import { combineReducers } from "redux";

const rootreducers  = combineReducers ({
    changeTheNumber,
    todoreducers

})

export default rootreducers;