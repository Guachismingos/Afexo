import { Button, Col, Container, Form, Row } from "react-bootstrap";

import imgForm from "../../assets/forms-assets/form-question-1.png";

const StoryForm = () => {
  return (
    <Container fluid className="secondary-color py-5 shadow-sm">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <Container>
              <h2 className="fw-bold pb-2">A mí también me pasó</h2>
              <p className="justify pb-3">
                Y vos ¿Hiciste el papel o te salvaste?. Contanos tu historia acá
                de manera anónima.
              </p>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("submit");
                }}
              >
                <Form.Group className="mb-3">
                  <Form.Label>Nombre/Alias</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingrese su nombre u alias"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Edad</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    min={0}
                    placeholder="Ingresa tu edad"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Categoría de la pregunta</Form.Label>
                  <Form.Select required>
                    <option value="1">Pubertad</option>
                    <option value="2">Sexo</option>
                    <option value="3">Relaciones</option>
                    <option value="4">Consentimiento</option>
                    <option value="5">Anticonceptivos</option>
                    <option value="6">Embarazo</option>
                    <option value="7">Protegete</option>
                    <option value="8">Orientación Sexual</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Tu historia</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={5}
                    placeholder="Escribe aquí"
                  />
                </Form.Group>
                <Form.Group className="d-flex gap-3">
                  <Button
                    variant="light"
                    type="reset"
                    className="border border-1"
                  >
                    Cancelar
                  </Button>
                  <Button className="bg-blue" variant="primary" type="submit">
                    Enviar
                  </Button>
                </Form.Group>
              </Form>
            </Container>
          </Col>
          <Col xs={1} md={1} lg={6} className="pb-5">
            <Container className="d-flex h-100 justify-content-center align-items-center">
              <img
                className="my-sm-3"
                src={imgForm}
                alt="has tu pregunta"
                width="75%"
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default StoryForm;
