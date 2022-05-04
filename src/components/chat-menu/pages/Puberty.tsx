import { useState } from "react";
import {
  Accordion,
  Card,
  Container,
} from "react-bootstrap";
import ItemToggle from "../components/ItemToggle";

const Puberty = () => {
  const [active, setActive] = useState("0");

  return (
    <Container fluid className="pt-5">
      <h2 className="fw-bold">Pubertad</h2>
      <p className="justify">
        La pubertad se refiere al período de tiempo en que tu cuerpo pasa de ser
        niño/a a ser adulto. Tu cuerpo atraviesa muchos cambios que se suceden
        lentamente en un periodo de tiempo. La pubertad es una parte normal y
        sana del crecimiento.
      </p>
      <Accordion flush defaultActiveKey="0">
        <Card>
          <Card.Header className="p-0">
            <ItemToggle eventKey="0" active={active} setActive={setActive}>
              ¿Qué pasa con mi cuerpo durante la pubertad?
            </ItemToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              La pubertad afecta diferente a mujeres y a hombres.Pero los
              cambios que podés esperar independientemente de tu sexo son: Podés
              tener acné en tu cara y cuerpo.Si esto te genera estrés, lo mejor
              es hablar con un doctor. Empezás a sudar más y podes tener olor en
              el cuerpo.Para evitarlo, podes bañarte varias veces al día y usar
              antitranspirante. Crece vello bajo las axilas y alrededor de los
              genitales.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="p-0">
            <ItemToggle eventKey="1" active={active} setActive={setActive}>
              ¿A qué edad se tiene la primera menstruación?{" "}
            </ItemToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Texto </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="p-0">
            <ItemToggle eventKey="2" active={active} setActive={setActive}>
              ¿Cada cuanto llega la menstruación?{" "}
            </ItemToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Texto </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="p-0">
            <ItemToggle eventKey="3" active={active} setActive={setActive}>
              ¿Cómo saber si mi vagina es normal?{" "}
            </ItemToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Texto </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="p-0">
            <ItemToggle eventKey="4" active={active} setActive={setActive}>
              ¿Qué es el clítoris y dónde está ubicado?{" "}
            </ItemToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>Texto </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="p-0">
            <ItemToggle eventKey="5" active={active} setActive={setActive}>
              ¿Cómo saber si mi pene y mis testículos son normales?{" "}
            </ItemToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>Texto </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="p-0">
            <ItemToggle eventKey="6" active={active} setActive={setActive}>
              ¿Qué son la erección, la eyaculación y los sueños húmedos?{" "}
            </ItemToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>Texto </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default Puberty;
