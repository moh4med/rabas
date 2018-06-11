/**
 * jest.tsx
 */
jest.mock("Linking", () => ({
  addEventListener: jest.fn(),
  canOpenURL: jest.fn(),
  getInitialURL: jest.fn().mockImplementation(() => new Promise((resolve) => resolve())),
  openURL: jest.fn(),
  removeEventListener: jest.fn()
}));

jest.mock("TextInput", () => {
  const RealComponent = (require as any).requireActual("TextInput");
  const React = require("React");
  class TextInput extends React.Component {
    public render() {
      delete this.props.autoFocus;

      return React.createElement("TextInput", this.props, this.props.children);
    }
  }
  TextInput.propTypes = RealComponent.propTypes;

  return TextInput;
});
jest.mock("ListView", () => "ListView");
jest.mock("ScrollView", () => "ScrollView");
jest.mock("TextInput", () => "TextInput");
// jest.mock("react-native-router-flux", () => ({
//   Actions: jest.fn(),
//   Login: jest.fn(),
//   Home: jest.fn(),
//   reset: jest.fn(),
//   pop: jest.fn(),
// }));
