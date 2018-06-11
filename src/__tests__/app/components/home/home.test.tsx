/**
 * home.test.tsx
 */
// tslint:disable:no-import-side-effect

import * as React from "react";
import "react-native";

import { Provider } from "react-redux";
import Home from "../../../../app/components/home/views/home";
import { store } from "../../../../app/config/store";
import { StoreMock } from "../../common/utilities/store.mock";

// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";

describe("home.tsx:", () => {
    it("Renders Home Component Correctly", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });

});
