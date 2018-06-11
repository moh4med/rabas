/**
 * theme.tsx
 */
export const theme = {
  opacity(hex: string, alpha: number) {
    return HEXToRGBA(hex, alpha);
  },

  colors: {
    black: "#000000",
    darkgrey: "#666666",
    green: "#00a550",
    lightblue: "#69c8c8",
    lightgrey: "#e6e7e8",
    red: "#ed1c24",
    transparent: "transparent",
    white: "#ffffff",
    yellow: "#f6d61c"

  }

};
const HEXToRGBA = (hex: string, alpha: number) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    throw new Error(("Bad hex value, should be #aabbcc"));
  }
  if (alpha < 0 || alpha > 1) {
    throw new Error(("Bad alpha value, should be [0-1]"));
  }

  const rgba = {
    a: alpha,
    b: parseInt(result[3], 16),
    g: parseInt(result[2], 16),
    r: parseInt(result[1], 16)
  };

  return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
};
