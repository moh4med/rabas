/**
 * applicationVM.tsx
 */

export class ApplicationVM {
    constructor(name: string, defaultServiceId: number, language: "en" | "ar", version: string, isDynamic?: boolean) {
        this.name = name;
        this.defaultServiceId = defaultServiceId;
        this.isDynamic = isDynamic || false;
        this.language = language;
        this.version = version;
    }

    public name: string;
    public defaultServiceId: number;
    public isDynamic: boolean;
    public language: "en" | "ar";
    public version: string;
}
