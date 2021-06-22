import { createStore } from "redux";
import { eventReducer } from "../components/nasa-events/reducer";

const store = createStore(eventReducer);

export default store;
