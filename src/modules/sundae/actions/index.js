import {
  CHANGE_SUM_SCOOPS, CHANGE_SUM_TOPPINGS,
  ERROR_FETCH_SCOOPS,
  ERROR_FETCH_TOPPINGS,
  FETCH_SCOOPS,
  FETCH_TOPPINGS,
  START_FETCH_SCOOPS,
  START_FETCH_TOPPINGS
} from "./types";

import SundaeService from "../services/sundae.service";

export const fetchScoops = () => (dispatch) => {
  dispatch({type: START_FETCH_SCOOPS});
  const onSuccess = response => dispatch({type: FETCH_SCOOPS, payload: response.data});
  const onError = error => dispatch({type: ERROR_FETCH_SCOOPS, payload: error.message});
  SundaeService.getScoops(onSuccess, onError);
}

export const fetchToppings = () => (dispatch) => {
  dispatch({type: START_FETCH_TOPPINGS});
  const onSuccess = response => dispatch({type: FETCH_TOPPINGS, payload: response.data});
  const onError = error => dispatch({type: ERROR_FETCH_TOPPINGS, payload: error.message});
  SundaeService.getToppings(onSuccess, onError);
}

export const changeSumScoops = (name, amount) => ({
  type: CHANGE_SUM_SCOOPS, payload: {name, amount}
})

export const changeSumToppings = (name, amount) => ({
  type: CHANGE_SUM_TOPPINGS, payload: {name, amount}
})
