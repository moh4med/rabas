
/**
 * httpRequestVM.tsx
 */

export class HttpRequest {
    constructor(method: "GET" | "POST", url: string, body: {}, headers: {}) {
        this.body = body ? JSON.stringify(body) : undefined;
        this.method = method;
        this.headers = headers;
        this.url = url;
    }

    public method: "GET" | "POST";
    public url: string;
    public body?: string;
    public headers: {};

}
