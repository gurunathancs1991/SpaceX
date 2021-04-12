import {
  REQUEST_ALLSPACEDETAILS,
  RECEIVE_ALLSPACEDETAILS
} from "../action/types";

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  lastUpdate: Date.now()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ALLSPACEDETAILS: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_ALLSPACEDETAILS: {
      return { ...state, isFetching: false, data: action.payload };
    }
    default:
      return state;
  }
};