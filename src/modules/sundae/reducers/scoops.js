import {
  ERROR_FETCH_SCOOPS,
  FETCH_SCOOPS,
  START_FETCH_SCOOPS,
} from "../actions/types";

const nullState = {
  data: [],
  fetching: false,
  error: null,
}

export default function (state = nullState, action) {
  const {type, payload} = action;

  switch (type) {
    case START_FETCH_SCOOPS: {
      return {...nullState, fetching: true}
    }
    case FETCH_SCOOPS: {
      return {...nullState, data: payload}
    }
    case ERROR_FETCH_SCOOPS: {
      return {...nullState, error: payload}
    }
    default: {
      return state;
    }
  }
}

