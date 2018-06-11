/**
 * userSessionVM.tsx
 */

export class UserSessionVM {
    constructor(uid: string, token: string) {
        this.uid = uid;
        this.token = token;
    }
    public uid: string;
    public token: string;
}
