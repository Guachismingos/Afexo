import { Dispatch, ReactNode, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container, useAccordionButton } from "react-bootstrap";

const ItemToggle = ({
  children,
  eventKey,
  active,
  setActive,
}: {
  children: ReactNode;
  eventKey: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}) => {
  const action = useAccordionButton(eventKey, () =>
    eventKey === active ? setActive("-1") : setActive(eventKey)
  );

  return (
    <Container className="p-2 py-3 border-0" fluid onClick={action}>
      <h5>
        {active === eventKey ? (
          <FontAwesomeIcon icon={faMinus} color="red" />
        ) : (
          <FontAwesomeIcon icon={faPlus} color="#553cdd" />
        )}{" "}
        {children}
      </h5>
    </Container>
  );
};

export default ItemToggle;
