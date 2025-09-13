import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cantine from "./images/CantineVersion2.jpg";
import LanguageDetector from "./LanguageDetector";
import NavHeader from "./NavHeader";
import logo from "./images/LogoLND.jpeg";
import LanguageContext  from "./LanguageContext";

function AppHeader() {
  const [language, setLanguage] = useState("en-US");
  return (
    <div>
      <Container>
        <Row>
          <div>
            <div
              className="p-0 text-center bg-image rounded-3 mx-auto me-3 "
              style={{
                backgroundImage: `url(${cantine})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                height: "200px",
                zIndex: "1",
                width: "100%",
                position: "relative",
              }}
            >
              <div>
                <Row>
                  <Col className="p-0">
                    <img
                      src={logo}
                      alt="logo"
                      width="200"
                      className="d-block rounded-3 ms-0"
                    />
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <h1 className="mb-3 text-white">
                      Lukala Ngangu Développement
                    </h1>
                  </Col>

                  <Col>
                    <div style={{ float: "right" }}>
                      <LanguageContext.Provider value={{ language, setLanguage }}>
                        <div>
                          <LanguageDetector />
                        </div>
                      </LanguageContext.Provider>
                  
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div>
            
            <NavHeader language={language} />
          </div>
        </Row>
        <Row>
          <div
            className="text-center p-3"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              width: "90%",
              height: "40px",
              verticalAlign: "text-top",
              position: "absolute",
              bottom: "0",
            }}
          >
            <p className="text-dark">
              &copy; 2025 Webmaster:{" "}
              <span class="text-primary"> Remy Miantezila </span>
              Contact:
              <span class="text-primary"> banabalukala&#64;gmail.com</span>
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default AppHeader;
