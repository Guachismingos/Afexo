import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import Menu from "../menu/Menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Section1 = () => {
  return (
    <div>
      <h5>Menú</h5>
      <hr />
      <Menu small={true} type="flex-column text-gray" />
    </div>
  );
};

const Section2 = () => {
  return (
    <div>
      <h5>Acerca de</h5>
      <hr className="mb-4" />
      <Stack gap={3}>
        <small>Condiciones de uso</small>
        <small>Política de privacidad</small>
        <small>Mapa del sitio</small>
      </Stack>
    </div>
  );
};

const Section3 = () => {
  const icons = [
    { icon: faTiktok, link: "https://www.tiktok.com/es/" },
    { icon: faYoutube, link: "https://www.youtube.com/" },
    { icon: faInstagram, link: "https://www.instagram.com/" },
  ];

  return (
    <div>
      <h5>Redes Sociales</h5>
      <hr className="mb-4" />
      <Stack
        className="mx-auto justify-content-center"
        direction="horizontal"
        gap={5}
      >
        {icons.map(({ icon, link }, i) => (
          <Button key={i} className="btn-social-media" href={link}>
            <FontAwesomeIcon size="3x" icon={icon} />
          </Button>
        ))}
      </Stack>
    </div>
  );
};

const Section4 = () => {
  return (
    <div>
      <h5>Afexo</h5>
      <hr className="mb-4" />
      <small>Programa de educación integral en sexualidad y afectividad.</small>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <Container className="py-5">
        <Row lg={4} className="py-5">
          <Col className="pb-3">
            <Section1 />
          </Col>
          <Col className="pb-3">
            <Section2 />
          </Col>
          <Col className="pb-3">
            <Section3 />
          </Col>
          <Col className="pb-3">
            <Section4 />
          </Col>
        </Row>
        <hr />
        <div className="d-flex">
          <small className="fc-secondary">&copy; 2022, Afexo</small>
          <small className="fc-secondary ms-auto">
            Afexo, Educación Integral
          </small>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
