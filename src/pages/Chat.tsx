import { Container, Col, Row } from "react-bootstrap";
import ChatMenu from "../components/chat-menu/ChatMenu";
import AskForm from "../components/chat-menu/components/AskForm";

const TopBannerSection = () => {
  return (
    <Container fluid className="top-banner-section shadow-sm">
      <Row>
        <Col xs={11} md={8} xxl={7} className="d-flex mx-auto">
          <Container className="py-5 my-4 text-white text-center">
            <h1 className="display-5 fw-bold mb-4">
              Tus dudas tienen respuesta
            </h1>
            <p className="fs-5">
              Sabemos que tenés preguntas sobre sexo, anticonceptivos,
              relaciones amorosas, los cambios de tu cuerpo y más. Acá te damos
              respuestas libres de vergüenza, palabras complicadas y regaños.
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

const Chat = () => {
  return (
    <Container
      fluid
      className="px-0 animate__animated animate__fadeIn animate__faster"
    >
      <TopBannerSection />
      <ChatMenu />
      <AskForm />
    </Container>
  );
};

export default Chat;
