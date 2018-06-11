/**
 * serevr.tsx.tsx
 */

import { Platform } from "react-native";

export const APP_NAME = "mPlant";
export const IS_SECURE = false;
export const BASE_SERVER_URL = "mplant.emeint.com";
export const BASE_SERVER_PORT = 80;
export const BASE_API_URL = "api/mplant/mobile";
export const SERVICE_ID = 31;
export const TER = Platform.OS === "ios" ? 40 : 50;
export const VERSION = "1.0.0";
export const DEFAULT_LANGUAGE = "en";
