/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],

  daisyui: {
    styled: true,
    themes: [
      // "dark",
      // "light",
      {
        "sunset-serenity-light": {
          primary: "#facc15",
          "primary-content": "#150f00",
          secondary: "#d8b4fe",
          "secondary-content": "#110c16",
          accent: "#a7f3d0",
          "accent-content": "#0a1410",
          neutral: "#292524",
          "neutral-content": "#d0cece",
          "base-100": "#f3f4f6",
          "base-200": "#d3d4d6",
          "base-300": "#b4b5b7",
          "base-content": "#141415",
          info: "#93c5fd",
          "info-content": "#080e16",
          success: "#22c55e",
          "success-content": "#000e03",
          warning: "#fbbf24",
          "warning-content": "#150d00",
          error: "#e11d48",
          "error-content": "#ffd8d9",
        },
        "sunset-serenity-dark": {
          primary: "#facc15",
          "primary-content": "#150f00",
          secondary: "#d8b4fe",
          "secondary-content": "#110c16",
          accent: "#a7f3d0",
          "accent-content": "#0a1410",
          neutral: "#292524",
          "neutral-content": "#d0cece",
          "base-100": "#44403c",
          "base-200": "#3a3633",
          "base-300": "#302d2a",
          "base-content": "#d6d5d4",
          info: "#93c5fd",
          "info-content": "#080e16",
          success: "#22c55e",
          "success-content": "#000e03",
          warning: "#fbbf24",
          "warning-content": "#150d00",
          error: "#e11d48",
          "error-content": "#ffd8d9",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    themeRoot: ":root",
  },
  darkMode: ["class", '[data-theme="sunset-serenity-dark"]'],
};