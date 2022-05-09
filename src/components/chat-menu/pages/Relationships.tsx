import { useEffect, useState } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { useData } from "../../../context/DataContex";

import DOMPurify from "dompurify";

import ItemToggle from "../components/ItemToggle";

const Relationships = () => {
  const [active, setActive] = useState("0");

  const { data, handleSetCollectionRef } = useData();

  useEffect(() => {
    handleSetCollectionRef("sex");
  }, [handleSetCollectionRef]);

  return (
    <Container
      fluid
      className="pt-5 animate__animated animate__fadeIn animate__fast"
    >
      <h2 className="fw-bold pb-2">Relaciones</h2>
      <p className="justify">
        La orientación sexual se refiere a quién te sentís atraído/a. Es posible
        que ya sepás cuál es tu orientación sexual, o todavía estés
        descubriéndola.Este es un proceso normal y no tenés que avergonzarte.
      </p>
      <Accordion flush defaultActiveKey="0">
        {data.map(({ id, title, body }, idx) => (
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

export default Relationships;
