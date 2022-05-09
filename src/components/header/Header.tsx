import { useState } from "react";
import { Navbar } from "react-bootstrap";
//Page Icon
import icon from "../../assets/afexo-icon.png";
import Menu from "../menu/Menu";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const setNavExpanded = (expanded: boolean) => {
    setExpanded(expanded);
  };

  const closeNav = () => setExpanded(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={setNavExpanded}
      className="sticky-top mx-auto px-3 border main-color"
      expand="lg"
    >
      <Navbar.Brand href="/home" className="ms-sm-0 ms-lg-4">
        <img src={icon} width="60" height="60" alt="Afexo" />
      </Navbar.Brand>
      <Navbar.Text className="mx-auto ms-4">Educación integral</Navbar.Text>
      <Navbar.Toggle />
      <Navbar.Collapse className="mx-auto justify-content-end my-2">
        <Menu onSelect={closeNav} />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
