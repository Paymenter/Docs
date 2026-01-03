import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import "./global.css";
import { registerIcons } from "./components/icons";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    registerIcons(app);
  },
};
