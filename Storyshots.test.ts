import path from "path";

import initStoryshots from "@storybook/addon-storyshots";

initStoryshots({
  framework: "react-native", // Manually specify the project's framework
  configPath: path.join(__dirname, ".storybook/storybook.requires.js"),
  // integrityOptions: { cwd: path.join(__dirname, "src", "stories") },
  // Other configurations
});
