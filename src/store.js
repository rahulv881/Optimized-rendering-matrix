import { createStore } from "redux";
import { boxReducer } from "./reducers/boxReducer";

const store = createStore(boxReducer);

export default store;