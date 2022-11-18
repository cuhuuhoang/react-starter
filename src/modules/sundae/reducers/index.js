import { combineReducers } from "redux";
import scoops from "./scoops";
import toppings from "./toppings";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  scoops,
  toppings,
  form: formReducer
})
