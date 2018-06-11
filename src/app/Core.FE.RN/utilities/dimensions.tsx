/**
 * dimensions.tsx
 */
// tslint:disable:no-require-imports
// tslint:disable:no-var-requires
// tslint:disable:no-backbone-get-set-outside-model

const Dimensions = require("Dimensions");
export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;
