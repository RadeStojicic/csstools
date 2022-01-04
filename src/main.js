import Vue from "vue";
import App from "./App.vue";
import router from "../src/routers/index.js";
import BackgroundColor from "./components/BackgroundColor.vue";
import Navbar from "./components/Navbar.vue";
import Border from "./components/Border.vue";
import BoxShadow from "./components/BoxShadow.vue";
import BackgroundImage from "./components/BackgroundImage.vue";
import TextDecoration from "./components/TextDecoration.vue";
import TextShadow from "./components/TextShadow.vue";
import TransfromRotate from "./components/TransfromRotate.vue";
import Opacity from "./components/Opacity.vue";
import BackgroundGradient from "./components/BackgroundGradient.vue";
import Flexbox from "./components/Flexbox.vue";
import Cursor from "./components/Cursor.vue";
import ImageFilter from "./components/ImageFilter.vue";
import VueMeta from "vue-meta";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "G-PF7JV2KS3G" },
});
Vue.config.productionTip = false;

Vue.component("vue-background-color", BackgroundColor);
Vue.component("vue-navbar", Navbar);
Vue.component("vue-border", Border);
Vue.component("vue-box-shadow", BoxShadow);
Vue.component("vue-background-image", BackgroundImage);
Vue.component("vue-text-decoration", TextDecoration);
Vue.component("vue-text-shadow", TextShadow);
Vue.component("vue-transform-rotate", TransfromRotate);
Vue.component("vue-opacity", Opacity);
Vue.component("vue-background-gradient", BackgroundGradient);
Vue.component("vue-flexbox", Flexbox);
Vue.component("vue-cursor", Cursor);
Vue.component("vue-image-filter", ImageFilter);

Vue.use(VueMeta);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
