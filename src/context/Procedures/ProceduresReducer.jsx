import {
  GET_PROCEDURES,
  CREATE_PROCEDURE,
  UPDATE_PROCEDURE,
  DELETE_PROCEDURE,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PROCEDURES:
      return {
        ...state,
        procedures: action.payload,
      };
    case CREATE_PROCEDURE:
      break;
    case UPDATE_PROCEDURE:
      break;
    case DELETE_PROCEDURE:
      break;
    default:
      break;
  }
};
