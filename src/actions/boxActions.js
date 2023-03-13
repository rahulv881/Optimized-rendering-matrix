import { CHANGE_BOX_TO_GREEN } from "../actionTypes";

const changeBoxToGreen = (index) => {
  return {
    type: CHANGE_BOX_TO_GREEN,
    payload: {
        curr: index
    }
  };
};

export { changeBoxToGreen  };