import { Col, Container, Row, Stack } from "react-bootstrap";
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
      <h5 className="ms-3">Menú</h5>
      <hr className="ms-3" />
      <Menu small={true} type="flex-column" />
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
          <FontAwesomeIcon key={i} size="3x" href={link} icon={icon} />
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
        <Row className="py-5">
          <Col>
            <Section1 />
          </Col>
          <Col>
            <Section2 />
          </Col>
          <Col>
            <Section3 />
          </Col>
          <Col>
            <Section4 />
          </Col>
        </Row>
        <hr className="divider" />
        <small className="fc-secondary">&copy; 2022, Afexo</small>
      </Container>
    </div>
  );
};

export default Footer;
