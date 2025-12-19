import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import "./custom.css";
import { registerIcons } from "./components/icons";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    registerIcons(app);
  },
};
