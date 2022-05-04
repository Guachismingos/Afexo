import { LazyExoticComponent } from "react";

//Import all Main Pages
import About from "../pages/About";
import Chat from "../pages/Chat";
import Stories from "../pages/Stories";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
//Chat child pages
import Puberty from "../components/chat-menu/pages/Puberty";
import Sex from "../components/chat-menu/pages/Sex";
import Relationships from "../components/chat-menu/pages/Relationships";
import Consent from "../components/chat-menu/pages/Consent";
import Contraceptives from "../components/chat-menu/pages/Contraceptives";
import Pregnancy from "../components/chat-menu/pages/Pregnancy";
import ProtectYourself from "../components/chat-menu/pages/ProtectYourself";
import SexualOrientation from "../components/chat-menu/pages/SexualOrientation";
//Chat link images
import img_01 from "../assets/stories-assets/icons-questions/icon-01.png";
import img_02 from "../assets/stories-assets/icons-questions/icon-02.png";
import img_03 from "../assets/stories-assets/icons-questions/icon-03.png";
import img_04 from "../assets/stories-assets/icons-questions/icon-04.png";
import img_05 from "../assets/stories-assets/icons-questions/icon-05.png";
import img_06 from "../assets/stories-assets/icons-questions/icon-06.png";
import img_07 from "../assets/stories-assets/icons-questions/icon-07.png";
import img_08 from "../assets/stories-assets/icons-questions/icon-08.png";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  childs: Route[];
  icon_img?: string;
  active?: boolean;
}

const routes: Route[] = [
  {
    to: "/home",
    path: "home",
    Component: Home,
    name: "Inicio",
    childs: [],
  },
  {
    to: "/chat",
    path: "chat",
    Component: Chat,
    name: "Hablemos",
    childs: [
      {
        to: "/puberty",
        path: "puberty",
        Component: Puberty,
        name: "Pubertad",
        icon_img: img_07,
        active: true,
        childs: [],
      },
      {
        to: "/sex",
        path: "sex",
        Component: Sex,
        name: "Sexo",
        icon_img: img_02,
        active: false,
        childs: [],
      },
      {
        to: "/relationships",
        path: "relationships",
        Component: Relationships,
        name: "Relaciones",
        icon_img: img_01,
        active: false,
        childs: [],
      },
      {
        to: "/consent",
        path: "consent",
        Component: Consent,
        name: "Consentimiento",
        icon_img: img_08,
        active: false,
        childs: [],
      },
      {
        to: "/contraceptives",
        path: "contraceptives",
        Component: Contraceptives,
        name: "Anticonceptivos",
        icon_img: img_05,
        active: false,
        childs: [],
      },
      {
        to: "/pregnacy",
        path: "pregnacy",
        Component: Pregnancy,
        name: "Embarazo",
        icon_img: img_03,
        active: false,
        childs: [],
      },
      {
        to: "/protect-yourself",
        path: "protect-yourself",
        Component: ProtectYourself,
        name: "Protegete",
        icon_img: img_06,
        active: false,
        childs: [],
      },
      {
        to: "/sexual-orientation",
        path: "sexual-orientation",
        Component: SexualOrientation,
        name: "Orientación Sexual",
        icon_img: img_04,
        active: false,
        childs: [],
      },
    ],
  },
  {
    to: "/stories",
    path: "stories",
    Component: Stories,
    name: "Me ha pasado",
    childs: [],
  },
  {
    to: "/about",
    path: "about",
    Component: About,
    name: "Conocenos",
    childs: [],
  },
  {
    to: "/contact",
    path: "contact",
    Component: Contact,
    name: "Contactanos",
    childs: [],
  },
];
export default routes;
