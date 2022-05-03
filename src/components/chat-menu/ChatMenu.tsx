import SideBarOptions from "./components/SideBarOptions";
import OptionContainer from "./components/OptionContainer";
import { Container, Row, Col } from "react-bootstrap";

const NavigationChatMenu = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={4}>
          <SideBarOptions />
        </Col>
        <Col className="bg-info">
          <OptionContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationChatMenu;
