/**
 * fluxRouter.tsx
 */
// tslint:disable-next-line:no-var-requires

// tslint:disable-next-line:no-var-requires
const flux = { ...require("react-native-router-flux") };

export const Router = flux.Router;
export const Scene = flux.Scene;
export const DefaultRenderer = flux.DefaultRenderer;
export const Actions = flux.Actions;
export const Navigate = (actionName: string) => {
    if (flux.Actions[actionName]) {
        flux.Actions[actionName]();
    }
};
export const Animation = flux.Animation;
export const Schema = flux.Schema;
export const Route = flux.Route;

export const ActionConst = flux.ActionConst;
