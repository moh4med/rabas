/**
 * networkManager.tsx
 */
// tslint:disable:no-string-literal
import { INetwork } from "../interfaces";
import { ApplicationManager, SessionManager } from "../managers";
import { BaseFEGetRequestVM, BaseFEPostRequestVM, BaseFERequestVM, BaseFEServerResponseVM, HttpRequest } from "../viewModels";

export class NetworkManager {

    constructor(networkProvider: INetwork) {
        this.NetworkProvider = networkProvider;
    }

    private NetworkProvider: INetwork;

    private createControlFields(headers: any) {

        headers["Accept"] = "application/json";
        headers["Content-Type"] = "application/json";

        if (!SessionManager.Instance.isAnonymousSession()) {
            headers["uid"] = SessionManager.Instance.getCurrentSession().uid;
            headers["token"] = SessionManager.Instance.getCurrentSession().token;
        }

        headers["service"] = ApplicationManager.Instance.getApplicationInfo().defaultServiceId;
        headers["ter"] = ApplicationManager.Instance.getTerminalInfo().terminalCode;
        headers["version"] = ApplicationManager.Instance.getApplicationInfo().version;
        headers["lang"] = ApplicationManager.Instance.getApplicationInfo().language;

        return headers;
    }

    private createRequestURL(request: BaseFERequestVM) {

        return [ApplicationManager.Instance.getServerInfo().baseServerUrl,
        ApplicationManager.Instance.getServerInfo().baseApiUrl,
        request.apiController,
        request.actionMethod].join("/");
    }

    public get<T>(request: BaseFEGetRequestVM): Promise<BaseFEServerResponseVM<T>> {

        return this.NetworkProvider.get<T>(
            new HttpRequest(
                "GET",
                this.createRequestURL(request),
                request.params,
                this.createControlFields(request.headers)));
    }

    public post<T>(request: BaseFEPostRequestVM): Promise<BaseFEServerResponseVM<T>> {

        return this.NetworkProvider.post<T>(
            new HttpRequest(
                "POST",
                this.createRequestURL(request),
                request.body,
                this.createControlFields(request.headers)));
    }
}
