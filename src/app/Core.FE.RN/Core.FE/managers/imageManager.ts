/**
 * imageManager.tsx
 */

import { ISingleton } from "../interfaces";
import { ApplicationManager } from "../managers";
import { ApplicationVM, ImageVM, ServerVM, TerminalVM } from "../viewModels";

export class ImageManager implements ISingleton {
    private constructor() { }

    // private fileStorage: IFileStorage;
    private static instance: ImageManager;

    public static get Instance() {
        return this.instance || (this.instance = new this());
    }

    public getImage(image: ImageVM, width?: number, height?: number): string {
        // Not Implemented
        // if (!this.getImage(image))
        //     this.download(image)
        // ex: "/imagehost.axd"
        if(image){
            return ApplicationManager.Instance.getServerInfo().baseServerUrl + image.url;
        }
        else 
        return null;
    }

    private download(image: ImageVM) {
        // Not Implemented
        // FileStorage.Save(byte[]);
    }

    private getLoacalImage(image: ImageVM) {
        // Not Implemented
        // return image path;
    }
}
