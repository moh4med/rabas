/**
 * baseManager.tsx
 */
import { INetwork } from "../Core.FE/interfaces";
import * as CoreManagers from "../Core.FE/managers";
import { BaseFENetworkResponseVM, BaseFEServerResponseVM, HttpRequest } from "../Core.FE/viewModels";

export class HttpProvider implements INetwork {

  public get<T>(request: HttpRequest): Promise<BaseFEServerResponseVM<T>> {
    return fetch(request.url, {
      method: request.method,
      headers: request.headers,
      body: request.body
    }).then((response) => response.json())
      .then((responseJson: BaseFEServerResponseVM<T>) => {
        return responseJson;
      }, (errorJson: BaseFENetworkResponseVM) => {
        throw errorJson;
      });
  }

  public post<T>(request: HttpRequest): Promise<BaseFEServerResponseVM<T>> {
    return fetch(request.url, {
      method: request.method,
      headers: request.headers,
      body: request.body
    }).then((response) => response.json())
      .then((responseJson: BaseFEServerResponseVM<T>) => {
        return responseJson;
      }, (errorJson: BaseFENetworkResponseVM) => {
        throw errorJson;
      });
  }
}
