/**
 * iView.tsx
 */
export interface IView {
    alert(title: string, details: string): any;
    showLoading(): any;
    hideLoading(): any;
}
