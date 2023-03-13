import { RESET_BOX, CHANGE_BOX_TO_GREEN } from "../actionTypes/actionTypes";

const resetBox = () => {
  return {
    type: RESET_BOX,
  };
};

const changeBoxToGreen = () => {
  return {
    type: CHANGE_BOX_TO_GREEN,
  };
};

export { resetBox, changeBoxToGreen  };