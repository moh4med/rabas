/**
 * index.tsx
 */

export interface IStateProps {
    Email: string;
    Password: string;
    Token: string;
    LastUpdated: Date;
}

export interface IStateActions {
    updateAuthenticationCredentials(email: string, password: string): any;
    updateAuthenticationToken(token: string): any;
    authenticationRequired(token: string): any;
}
