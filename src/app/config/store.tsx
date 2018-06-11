/**
 * store.tsx
 */

import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from "redux";

// tslint:disable-next-line:import-name
import { AsyncStorage } from "react-native";
import { autoRehydrate, persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { CombinedReducers } from "./reducers";

(console as any).disableYellowBox = true;

export const configureStore = (InitialState = {}) => {
    const enhancer = compose(
        applyMiddleware(
            thunk
            // logger
        ),
        // autoRehydrate()
    );

    return createStore(combineReducers({ ...CombinedReducers }), InitialState, enhancer);
};

export const store = configureStore({});
// persistStore(store, {
//     storage: AsyncStorage,
//     // blacklist: ["reduxPersist:appRouter"],
//     // whitelist: ["reduxPersist:authentication", "reduxPersist:login"]
// });
