import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import MainContent from "./main-container/MainContent";
import Footer from "./footer/Footer";
import { DataProvider } from "../context/DataContex";

const App = () => {
  return (
    <Container fluid className="animate__animated animate__fadeIn px-0">
      <BrowserRouter>
        <DataProvider>
          <Header />
          <MainContent />
          <Footer />
        </DataProvider>
      </BrowserRouter>
    </Container>
  );
};

export default App;
