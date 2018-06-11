/**
 * index.tsx
 */

export interface IStateProps {
    text: string;
    isVisible: boolean;
    color: string;
    size: "small" | "large";
}

export interface IStateActions {
    initLoading(color: string, size?: number | "small" | "large", isVisible?: boolean, text?: string): any;
    showLoading(text?: string): any;
    hideLoading(): any;
}
