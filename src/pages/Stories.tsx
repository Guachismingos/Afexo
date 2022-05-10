import { Fragment, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Spinner,
  Image,
  Carousel,
} from "react-bootstrap";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import StoryForm from "../components/stories/StoryForm";
import { useData } from "../context/DataContex";
import IData from "../interfaces/IData";

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
  story: IData;
  classVariables?: string;
}) => {
  const { title, body, image_url } = story;

  const order: number = classVariables !== "0" ? 2 : 0;

  return (
    <Container className={`py-5 ${classVariables}`} fluid>
      <Container>
        <Row className="gap-5">
          <Col lg={{ span: 6, order }} md={12}>
            <h2 className="fw-bold pb-2">{title}</h2>
            <p className="fs-5 justify">{body}</p>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Container>
              <Image className="px-2" fluid src={image_url} alt={title} />
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const MoreStories = ({ data }: { data: IData[] }) => {
  const newArray: IData[][] = [];
  for (let index = 0; index < data.length; index += 3) {
    newArray.push(data.slice(index, index + 3));
  }

  return (
    <Container fluid>
      <Container className="pb-5">
        <hr className="divider mb-5" />
        <h2 className="fw-bold pb-2 text-center">Descubrí más historias</h2>
        <Carousel>
          {newArray.map((values) => (
            <Carousel.Item key={values[0].id}>
              <Row>
                {values.map(({ id, image_url }, idx) => (
                  <Col
                    className="d-flex justify-content-center align-items-center my-5"
                    md={4}
                    key={id}
                  >
                    <Image
                      width={`${idx !== 1 ? "80%" : "100%"}`}
                      fluid
                      src={image_url}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Container>
  );
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
          {data.slice(0, 3).map((story: IData, idx) => (
            <StoryContainer
              key={story.id}
              story={story}
              classVariables={`${idx % 2 && "secondary-color"}`}
            />
          ))}
          <MoreStories data={data} />
          <StoryForm />
        </Container>
      )}
    </Fragment>
  );
};

export default Stories;
