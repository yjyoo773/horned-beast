import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="align-middle">
        <Main />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
