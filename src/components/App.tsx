import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import MainContent from "./main-container/MainContent";
import Footer from "./footer/Footer";
import GoToTopButton from "./GoToTopButton";

const App = () => {
  return (
    <Container fluid className="animate__animated animate__fadeIn px-0">
      <BrowserRouter>
        <Header />
        <MainContent />
        <Footer />
      </BrowserRouter>
      <GoToTopButton />
    </Container>
  );
};

export default App;
