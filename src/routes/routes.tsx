import { LazyExoticComponent } from "react";

//Import all Pages
import About from "../pages/About";
import Chat from "../pages/Chat";
import Stories from "../pages/Stories";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const routes: Route[] = [
  {
    to: "/home",
    path: "home",
    Component: Home,
    name: "Inicio",
  },
  {
    to: "/chat",
    path: "chat",
    Component: Chat,
    name: "Hablemos",
  },
  {
    to: "/stories",
    path: "stories",
    Component: Stories,
    name: "Me ha pasado",
  },
  {
    to: "/about",
    path: "about",
    Component: About,
    name: "Conocenos",
  },
  {
    to: "/contact",
    path: "contact",
    Component: Contact,
    name: "Contactanos",
  },
];
export default routes;
