import { Fragment, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Story from "../interfaces/Story";
import { useData } from "../context/DataContex";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const TopBannerSection = () => {
  return (
    <Container fluid className="top-banner-section shadow-sm">
      <Row md={2} lg={12} xl={4}>
        <Col className="banner-1 banner" />
        <Col
          className="banner-2 banner text-light"
          md={6}
          lg={5}
          xl={6}
          xxl={5}
        >
          <Container fluid className="py-5 my-4">
            <h1 className="display-1 fw-bold pb-2">
              <small className="display-4">¡Tus dudas tienen</small> respuesta!
            </h1>
            <p className="fs-3 justify w-75">
              ¿Buscás información sobre sexo, relaciones, tu cuerpo y más?.
            </p>
            <p className="fs-3 justify">Acá te explicamos todo.</p>
          </Container>
        </Col>
        <Col className="banner-3 banner" />
      </Row>
    </Container>
  );
};
const Section1 = () => {
  return (
    <Container fluid className="shadow-sm py-5 secondary-color">
      <Container>
        <Row>
          <Col xs={{ order: 1 }} lg={12} xl={6}>
            <h2 className="fw-bold pb-2">
              Aprendé a protegerte de las enfermedades de transmisión sexual
              durante el sexo oral
            </h2>
            <p className="fs-5 justify">
              No podés quedar embarazada al tener sexo oral, pero sí podés
              contraer una ETS si no usás protección. Practicar sexo con
              protección siempre es mejor, por eso en este video te contamos
              cómo podés protegerte si vas a tener contacto con la vulva o el
              ano.
            </p>
          </Col>
          <Col
            xs={{ order: 12 }}
            className="d-flex justify-content-center align-items-center"
          >
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto my-sm-3"
              width="75%"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const Section2 = ({ stories }: { stories: Story[] }) => {
  const [story] = stories;
  const { title, body, author, age, image_url } = !!!story || story;
  return (
    <Container fluid className={story && "shadow-sm py-5"}>
      {story && (
        <Container>
          <Row>
            <Col lg={12} xl={6}>
              <h2 className="fw-bold pb-2">{title}</h2>
              <p className="fs-5 justify">{body}</p>
              <p className="fw-bold">{`-${author}, ${age} años.`}</p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <img
                className="my-sm-3"
                src={image_url}
                alt={title}
                width="75%"
              />
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

const Section3 = ({ stories }: { stories: Story[] }) => {
  return (
    <Container fluid className={stories.length > 0 ? "shadow-sm py-5" : ""}>
      {stories.length > 0 && (
        <Container>
          <h2 className="fw-bold pb-2">Descubrí más historias</h2>
          <Row className="py-5">
            {stories.map(({ id, title, icon_url }) => (
              <Col
                sm={12}
                md={true}
                as={NavLink}
                key={id}
                className="text-center btn-stories py-3 rounded link-dark"
                to="/stories"
              >
                <Container>
                  <img
                    className="mb-3"
                    src={icon_url}
                    alt={title}
                    width="70%"
                  />
                </Container>
                <small className="fw-bold">{title}</small>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </Container>
  );
};

const Section4 = () => {
  return (
    <Container fluid className="shadow-sm py-5 secondary-color">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="fw-bold">Publicaciones de Instagram</h2>
          </Col>
          <Col className="d-flex justify-content-center align-items-center"></Col>
        </Row>
      </Container>
    </Container>
  );
};

const Home = () => {
  const { data, handleSetCollectionRef, loading } = useData();

  useEffect(() => {
    handleSetCollectionRef("stories");
  }, [handleSetCollectionRef]);

  return (
    <Fragment>
      {loading ? (
        <Container className="loading-container">
          <Spinner className="bg-blue" animation="grow" />
        </Container>
      ) : (
        <Container
          fluid
          className="px-0 animate__animated animate__fadeIn animate__faster"
        >
          <ScrollToTopOnMount />
          <TopBannerSection />
          <Section1 />
          <Section2 stories={data} />
          <Section3 stories={data} />
          <Section4 />
        </Container>
      )}
    </Fragment>
  );
};

export default Home;
