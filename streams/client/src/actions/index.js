import {CREATE_STREAM, SIGN_IN, SIGN_OUT} from "./types";
import streams from "../apis/streams";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createStream = (formatValues) => async dispatch => {
  const response = await streams.post("/streams", formatValues);
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });
};
