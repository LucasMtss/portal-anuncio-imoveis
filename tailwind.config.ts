import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';

const plugin = require('tailwindcss/plugin');

const customTransitionPlugin = plugin(function ({ addUtilities }: PluginAPI) {
  addUtilities(
    {
      '.transition-custom': {
        transition: 'all 0.3s ease-in-out 0.1s',
      },
    },
  );
});

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        orange: "#F36C21",
        "orange-dark": "#ED672B",
        black: "#393B3D",
        grey: "#4E5254",
        "grey-light": "#808487",
        purple: "#8224CB",
        "border-bg": "#C0C7CA",
        "grey-extra-light": "#EDF1F4",
        "grey-mid-light": '#A1A7AA',
        "grey-dark": "#848484",
        "blue-dark": "#1C2A39",
        "blue-mid": "#063D7E",
        "grey-mid-dark": "#555555",
        "tag-bg": "#F3F3F3",
        "link-color": "#2362AF"
      },
    },
  },
  plugins: [
    customTransitionPlugin
  ],
} satisfies Config;
