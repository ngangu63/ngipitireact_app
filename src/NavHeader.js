import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Articles from "./Pages/Articles";
import Courses from "./Pages/Courses";
import NotFound from "./Pages/NotFound";
import labels from "./labels";

function NavHeader(props) {
  const language = props.language;

  return (
    <Router>
      <Navbar
        expand="lg"
        className="bg-info-subtle"
        style={{ width: "99%", height: "45px" }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "90px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" exact>
                {labels[language].home}
              </Nav.Link>
              <Nav.Link as={Link} to="member">
                {labels[language].member}
              </Nav.Link>

              <Nav.Link as={Link} to="about">
                {labels[language].about}
              </Nav.Link>

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/articles">
                  Articles
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/courses">
                  Courses
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="contact">
                {labels[language].contact}
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default NavHeader;
