import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk";
import root from "./reducers";

const composeA = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    root,
    composeA(applyMiddleware(thunk))
)
export default store
