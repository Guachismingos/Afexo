import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const GoToTopButton = () => {
  const [hidden, setHidden] = useState(true);

  const toggleVisibility = () => {
    window.scrollY > 300 ? setHidden(false) : setHidden(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Button
      onClick={() => window.scrollTo(0, 0)}
      hidden={hidden}
      size="lg"
      className="go-to-top-button rounded-circle bg-blue animate__animated animate__fadeInUp" 
    >
      <FontAwesomeIcon icon={faArrowCircleUp} />
    </Button>
  );
};

export default GoToTopButton;
