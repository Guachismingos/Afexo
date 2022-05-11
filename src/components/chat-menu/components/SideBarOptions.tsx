import { Container, Nav, Image } from "react-bootstrap";
import routes from "../../../routes/routes";
import { NavLink } from "react-router-dom";

const SideBarOptions = () => {
  return (
    <Container fluid className="d-flex justify-content-center">
      <Nav variant="pills" className="justify-content-start">
        {routes[1].childs.map(({ name, icon_img, path }, i) => (
          <Nav.Item className="w-100" key={name}>
            <Nav.Link
              as={NavLink}
              className="fw-bold fs-5"
              eventKey={i}
              to={path}
            >
              <Image className="me-2" width={75} src={icon_img} />
              {name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
};

export default SideBarOptions;
