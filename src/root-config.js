import { registerApplication, start } from "single-spa";

registerApplication(
  "app2",
  () => import("./app2.jsx"),
  (location) => false,
  { some: "value" }
);

export default start;
