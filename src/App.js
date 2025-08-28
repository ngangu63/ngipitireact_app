
import AppHeader from "./AppHeader";

function App(){
  return (
 
    <AppHeader/>
  );
}

/* function App() {
	return (
   
		<Router>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand>
					<h1 style={{ color: "green" }}>Geeks</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link as={Link} to="/" exact>
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/about">
							About
						</Nav.Link>
						<NavDropdown title="Resources">
							<NavDropdown.Item as={Link} to="/articles">
								Articles
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/courses">
								Courses
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to="/contact">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
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
} */
export default App;