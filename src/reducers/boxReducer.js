import { CHANGE_BOX_TO_GREEN, RESET_BOX } from "../actionTypes";

const initialState = {
  curr: -1
};

const boxReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOX_TO_GREEN:
      return {
        ...state,
        curr: action.payload.curr,
      };
    default:
      return state;
  }
};

export  {boxReducer};