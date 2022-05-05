import { useEffect, useState } from "react";
import { DocumentSnapshot } from "firebase/firestore";
import { Accordion, Card, Container } from "react-bootstrap";
import { useData } from "../../../context/DataContex";

import DOMPurify from "dompurify";

import ItemToggle from "../components/ItemToggle";

import IData from "../../../interfaces/IData";

const Puberty = () => {
  const { onGetData } = useData();
  const [active, setActive] = useState("0");

  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const unsubscribe = onGetData("puberty", (querySnapShot) => {
      const docs: IData[] = [];
      querySnapShot.forEach((doc: DocumentSnapshot) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setData(docs);
    });
    return unsubscribe;
  }, [onGetData]);

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

export default Puberty;
