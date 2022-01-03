import { Navbar } from "react-bootstrap";
//Page Icon
import icon from "../../assets/afexo-icon.png";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <Navbar className="sticky-top mx-auto px-3 border main-color" expand="lg">
      <Navbar.Brand href="/home">
        <img src={icon} width="73.1" height="73.1" alt="Afexo" />
      </Navbar.Brand>
      <Navbar.Text className="mx-auto ms-4">Educación integral</Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="mx-auto justify-content-end my-2" id="nabvar">
        <Menu />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
