import img_01 from "../assets/stories-assets/icons-questions/icon-01.png";
import img_02 from "../assets/stories-assets/icons-questions/icon-02.png";
import img_03 from "../assets/stories-assets/icons-questions/icon-03.png";
import img_04 from "../assets/stories-assets/icons-questions/icon-04.png";
import img_05 from "../assets/stories-assets/icons-questions/icon-05.png";
import img_06 from "../assets/stories-assets/icons-questions/icon-06.png";
import img_07 from "../assets/stories-assets/icons-questions/icon-07.png";
import img_08 from "../assets/stories-assets/icons-questions/icon-08.png";

interface Subject {
    title: string;
    icon_img: string;
    active: boolean;
}

const chat: Subject[] =
[
    {
        title: "Pubertad",
        icon_img: img_07,
        active: true
    },
    {
        title: "Sexo",
        icon_img: img_02,
        active: false
    },
    {
        title: "Relaciones",
        icon_img: img_01,
        active: false
    },
    {
        title: "Consentimiento",
        icon_img: img_08,
        active: false
    },
    {
        title: "Anticonceptivos",
        icon_img: img_05,
        active: false
    },
    {
        title: "Embarazo",
        icon_img: img_03,
        active: false
    },
    {
        title: "Protegete",
        icon_img: img_06,
        active: false
    },
    {
        title: "Orientación Sexual",
        icon_img: img_04,
        active: false
    },
]

export default chat;