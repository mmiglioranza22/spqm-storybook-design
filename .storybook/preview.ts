import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/app/globals.css";
// import { themes } from "@storybook/theming";
// import { initialize, mswLoader } from "msw-storybook-addon";
// initialize();

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "primary-bg", value: "#7f7e7e" },
        { name: "dark-bg", value: "#545454" },
        { name: "light-bg", value: "#e8d8c0" },
      ],
    },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  // loaders: [mswLoader],
  decorators: [
    withThemeByDataAttribute({
      themes: {
        // nameOfTheme: 'dataAttributeForTheme',
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      // dataAttribute: "data-theme", // default prop on npx install does not work
      attributeName: "data-mode",
    }),
  ],
};

export default preview;
