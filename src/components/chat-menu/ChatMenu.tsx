import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { useData } from "../../context/DataContex";
import SideBarOptions from "./components/SideBarOptions";

const NavigationChatMenu = () => {
  const { loading } = useData();

  return (
    <Container>
      <Row className="pb-5">
        <Col md={12} lg={5} xl={4} className="pt-5">
          <SideBarOptions />
        </Col>
        <Col>
          {loading ? (
            <Container className="loading-container-2">
              <Spinner className="bg-blue" animation="grow" />
            </Container>
          ) : (
            <Outlet />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationChatMenu;
