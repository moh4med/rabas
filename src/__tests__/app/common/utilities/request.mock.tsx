
/**
 * request.mock.tsx
 */
// tslint:disable-next-line:no-import-side-effect
import * as fetchMock from "fetch-mock";
import "isomorphic-fetch"; // don't specify `as` or `from` as this polyfills into global namespace anyway
import { GetRequestVM, PostRequestVM } from "../../../../app/common/viewModels";
import { ResponseVM } from "../../../../app/common/viewModels";
import { ApplicationManager } from "../../../../app/Core.FE.RN/Core.FE/managers";

export const RequestMock = {
  init(serviceType: "GET" | "POST", request?: PostRequestVM | GetRequestVM, expectedData: any = {}) {
    const fetchMock = require("fetch-mock");

    const requestUrl = request && request.actionMethod ? [
      ApplicationManager.Instance.getServerInfo().baseServerUrl,
      ApplicationManager.Instance.getServerInfo().baseApiUrl, request.apiController, request.actionMethod].join("/") : "*";
    if (serviceType === "GET") {
      fetchMock.getOnce(requestUrl, expectedData);
    }

    if (serviceType === "POST") {
      fetchMock.postOnce(requestUrl, expectedData);
    }

  },

  clear() {
    fetchMock.reset();
    fetchMock.restore();
  }
};
