import { Container, Nav, Image } from "react-bootstrap";
import chat from "../../../data/chat";
import { useState } from 'react';

const SideBarOptions = () => {

  const [active, setActive] = useState("0");

  return (
    <Container fluid className="d-flex my-5 justify-content-center text-left">
      <Nav variant="pills" activeKey={active} className="justify-content-center flex-xl-column">
        {
          chat.map(({ title, icon_img }, i) =>
            <Nav.Item key={title}>
              <Nav.Link className="fw-bold fs-5" eventKey={i} onClick={() => setActive(i.toString())}>
                  <Image className="me-4" width={75} src={icon_img} />{title}
              </Nav.Link>
            </Nav.Item>
          )
        }
      </Nav>
    </Container>
  );
};

export default SideBarOptions;
