import { useState } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { useData } from "../../../context/DataContex";

import DOMPurify from "dompurify";

import ItemToggle from "../components/ItemToggle";

const Sex = () => {
  const [active, setActive] = useState("0");

  const { data } = useData();

  return (
    <Container
      fluid
      className="pt-5 animate__animated animate__fadeIn animate__fast"
    >
      <h2 className="fw-bold pb-2">Sexo</h2>
      <p className="justify">
        Existen diferentes maneras de tener relaciones sexuales, lo importante
        es tener una buena comunicación con la otra persona sin importar qué
        actividad sexual vayás a practicar.Es importante tener en cuenta que el
        sexo puede llevar a un embarazo, pero también podés contagiarte de
        enfermedades de transmisión sexual
      </p>
      <Accordion flush defaultActiveKey="0">
        {data[2].map(({ id, title, body }, idx) => (
          <Card key={id} className="border-0">
            <Card.Header className="p-0 border-0">
              <ItemToggle
                eventKey={`${idx}`}
                active={active}
                setActive={setActive}
              >
                {title}
              </ItemToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={`${idx}`}>
              <Card.Body
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(`${body}`, {
                    USE_PROFILES: { html: true },
                  }),
                }}
              />
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
};

export default Sex;
