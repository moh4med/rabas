/**
 * app.test.tsx
 */
// tslint:disable:no-import-side-effect
import * as React from "react";
import "react-native";

import { App } from "../../app/app";
import { RequestMock } from "../app/common/utilities/request.mock";

// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";

afterEach(() => {
  RequestMock.clear();
});

describe("app.tsx:", () => {
  it("Renders App Component Correctly", () => {
     const tree = renderer.create(
       <App />
     );
  });
});
