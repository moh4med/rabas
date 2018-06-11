/**
 * baseManager.tsx
 */
import { Alert } from "react-native";
import { IView } from "../Core.FE/interfaces";

export class ViewHandler implements IView {
    public alert(title: string, details: string) {
        Alert.alert(title, details,
            [
                { text: "Dismiss", style: "cancel" }
            ],
            { cancelable: true }
        );
    }

    public showLoading() {
        throw new Error("Method not implemented.");
    }
    public hideLoading() {
        throw new Error("Method not implemented.");
    }

}
