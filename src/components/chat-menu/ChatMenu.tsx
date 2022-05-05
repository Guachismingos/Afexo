import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBarOptions from "./components/SideBarOptions";

const NavigationChatMenu = () => {
  return (
    <Container>
      <Row className="pb-5">
        <Col md={12} lg={5} xl={4} className="pt-5">
          <SideBarOptions />
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationChatMenu;
