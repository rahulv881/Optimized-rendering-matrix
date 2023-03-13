import { CHANGE_BOX_TO_GREEN, RESET_BOX } from "../actionTypes";

const initialState = {
  prev: -1,
  curr: -1
};

export default boxReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_BOX:
      return {
        ...state,
      };
    case CHANGE_BOX_TO_GREEN:
      return {
        ...state,
        prev: state.curr,
        curr: action.payload.index,
      };
    default:
      return state;
  }
};