import { Card, Col, Container, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

interface Images {
  id: string;
  media_type: string;
  media_url: string;
  username: string;
}

const ImageCard = () => {
  const api_key = "";
  const { list } = useFetch(
    `https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url&limit=6&access_token=${api_key}`
  );
  let images: Images[] = [];
  if (!!list) {
    const { data } = list;
    images = data;
  }

  return (
    <Container fluid>
      <Row xs={1} md={3} lg={3} className="g-3">
        {images.map(({ media_url }) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={media_url} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageCard;
