import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";

//type is the type of nav menu, horizontal or vertical, and small for the size of the links
const Menu = ({
  type = "",
  small = false,
  onSelect,
}: {
  type?: string;
  small?: boolean;
  onSelect?: () => void;
}) => {
  return (
    <Nav onClick={onSelect} className={`nav-text me-5 ${type}`}>
      {routes.map(({ to, name }) => (
        <Nav.Link className="me-auto" as={NavLink} key={name} to={to}>
          {small ? <small>{name}</small> : name}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Menu;
