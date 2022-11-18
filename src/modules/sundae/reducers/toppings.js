import {
  ERROR_FETCH_TOPPINGS,
  FETCH_TOPPINGS,
  START_FETCH_TOPPINGS,
} from "../actions/types";

const nullState = {
  data: [],
  fetching: false,
  error: null,
}

export default function (state = nullState, action) {
  const {type, payload} = action;

  switch (type) {
    case START_FETCH_TOPPINGS: {
      return {...nullState, fetching: true}
    }
    case FETCH_TOPPINGS: {
      return {...nullState, data: payload}
    }
    case ERROR_FETCH_TOPPINGS: {
      return {...nullState, error: payload}
    }
    default: {
      return state;
    }
  }
}

