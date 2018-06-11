/**
 * serverVM.tsx
 */

export class ServerVM {
    constructor(ip: string, port: number, isSecure: boolean, baseApiUrl: string) {
        this.ip = ip;
        this.port = port;
        this.isSecure = isSecure;
        this.protocol = this.isSecure ? "https" : "http";
        this.baseApiUrl = baseApiUrl;
        this.baseServerUrl = `${this.protocol}://${this.ip}:${this.port}`;

    }
    private protocol: "http" | "https";
    private ip: string;
    private port: number;
    private isSecure: boolean;

    public baseApiUrl: string;
    public baseServerUrl: string;

}
