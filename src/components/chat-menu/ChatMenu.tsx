import SideBarOptions from "./components/SideBarOptions";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const NavigationChatMenu = () => {
  return (
    <Container>
      <Row>
        <Col xl={4}>
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
