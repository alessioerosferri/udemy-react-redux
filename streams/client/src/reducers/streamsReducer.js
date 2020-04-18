import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS} from "../actions/types";
import _ from "lodash";

export default (state = {}, {type, payload}) => {
  switch (type) {
    case EDIT_STREAM:
    case FETCH_STREAM:
    case CREATE_STREAM:
      return {...state, [payload.id]: payload};
    case DELETE_STREAM:
      return _.omit(state, payload)
    case FETCH_STREAMS:
      return {...state, ..._.mapKeyes(payload, "id")};
    default:
      return state;
  }
}