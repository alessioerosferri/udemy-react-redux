import {EDIT_STREAM} from "../actions/types";

export default (state = {}, {type, payload}) => {
  switch (type) {
    case EDIT_STREAM:
      return {...state, [payload.id]: payload};
    default:
      return state;
  }
}