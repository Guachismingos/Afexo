import { Fragment, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import StoryForm from "../components/stories/StoryForm";
import { useData } from "../context/DataContex";
import Story from "../interfaces/Story";

const TopBannerSection = () => {
  return (
    <Container fluid className="top-banner-section shadow-sm">
      <Row>
        <Col xs={11} md={8} xxl={7} className="d-flex mx-auto">
          <Container className="py-5 my-4 text-white text-center">
            <h1 className="display-5 fw-bold mb-4">Me ha pasado</h1>
            <p className="fs-5">
              Eso que sentís que solo te ha pasado a vos y no te atrevés a
              contar le ha pasado a alguien más.
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

const StoryContainer = ({
  story,
  classVariables,
}: {
  story: Story;
  classVariables?: string;
}) => {
  const { title, body, image_url } = story;

  const order: number = classVariables !== "0" ? 2 : 0;

  return (
    <Container className={`py-5 ${classVariables}`} fluid>
      <Container>
        <Row>
          <Col lg={{ span: 6, order }} md={12}>
            <h2 className="fw-bold pb-2">{title}</h2>
            <p className="fs-5 justify">{body}</p>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <img className="my-sm-3" src={image_url} alt={title} width="75%" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const MoreStories = () => {
  return <>fefefef</>;
};

const Stories = () => {
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
          {data.slice(0, 3).map((story: Story, idx) => (
            <StoryContainer
              key={story.id}
              story={story}
              classVariables={`${idx % 2 && "secondary-color"}`}
            />
          ))}
          <MoreStories />
          <StoryForm />
        </Container>
      )}
    </Fragment>
  );
};

export default Stories;
