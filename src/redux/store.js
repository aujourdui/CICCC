import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import { snackReducer } from "./reducers/snackReducer";

const store = createStore(snackReducer)

export const AppProvider = ({ children }) => <Provider store={store}>{children}</Provider>