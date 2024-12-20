import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "./routes/aboutPage.tsx"),
  route("contact", "./routes/contact.tsx"),

  // Use prefix as an intercepting route, inside it you can define index route and it's children routes along with a single new layout
  ...prefix("users", [
    layout("./routes/userLayout.tsx", [
      index("routes/users.tsx"),
      route(":username", "routes/userHomepage.tsx"),
    ]),
  ]),
] satisfies RouteConfig;

