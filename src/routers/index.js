import Vue from "vue";
import Router from "vue-router";
import BackgroundColor from "../components/BackgroundColor.vue";
import Border from "../components/Border.vue";
import BoxShadow from "../components/BoxShadow.vue";
import BackgroundImage from "../components/BackgroundImage.vue";
import TextDecoration from "../components/TextDecoration.vue";
import TextShadow from "../components/TextShadow.vue";
import TransformRotate from "../components/TransfromRotate.vue";
import Opacity from "../components/Opacity.vue";
import BackgroundGradient from "../components/BackgroundGradient.vue";
import Flexbox from "../components/Flexbox.vue";
import Cursor from "../components/Cursor.vue";
import ImageFilter from "../components/ImageFilter.vue";
import Homepage from "../App.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Homepage,
    },
    {
      path: "/background-color",
      name: "background-color",
      component: BackgroundColor,
    },
    {
      path: "/border",
      name: "border",
      component: Border,
    },
    {
      path: "/box-shadow",
      name: "box-shadow",
      component: BoxShadow,
    },
    {
      path: "/background-image",
      name: "background-image",
      component: BackgroundImage,
    },
    {
      path: "/text-decoration",
      name: "text-decoration",
      component: TextDecoration,
    },
    {
      path: "/text-shadow",
      name: "text-shadow",
      component: TextShadow,
    },
    {
      path: "/transform-rotate",
      name: "transform-rotate",
      component: TransformRotate,
    },
    {
      path: "/opacity",
      name: "opacity",
      component: Opacity,
    },
    {
      path: "/background-gradient",
      name: "background-gradient",
      component: BackgroundGradient,
    },
    {
      path: "/flexbox",
      name: "flexbox",
      component: Flexbox,
    },
    {
      path: "/cursor",
      name: "cursor",
      component: Cursor,
    },
    {
      path: "/image-filter",
      name: "image-filter",
      component: ImageFilter,
    },
    {
      path: "/",
      name: "background-color",
      component: BackgroundColor,
    },
  ],
});

export default router;
