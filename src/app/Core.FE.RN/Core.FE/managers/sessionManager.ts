/**
 * sessionManager.tsx
 */
import { SessionVM, UserSessionVM } from "../viewModels";

export class SessionManager {
    private constructor() { }

    private userSession: UserSessionVM;
    private isAnonymous: boolean = true;

    private static instance: SessionManager;

    public static get Instance() {
        return this.instance || (this.instance = new this());
    }
    public startSession(userSession: UserSessionVM) {
        this.userSession = userSession;
        this.isAnonymous = false;
    }
    public endSession() {
        this.isAnonymous = true;
    }
    public getCurrentSession() {
        return this.userSession;
    }
    public isAnonymousSession() {
        return this.isAnonymous;
     }

}
