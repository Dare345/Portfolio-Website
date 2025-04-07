import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../components/Navbar.css"


function Navigation(props) {
  return (
    <Container className="NavBar">
        <Navbar className="fixed-top" data-bs-theme="dark" collapseOnSelect expand="xl">
        <Container>
            <Navbar.Brand className="brand" href={props.home}>Darren Yang</Navbar.Brand>
            <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="justify-content-end" navbarScroll>
                        <Nav.Link href={props.nav.about}>About Me</Nav.Link>
                        <Nav.Link href={props.nav.major}>Major</Nav.Link>
                        <Nav.Link href={props.nav.courses}>Courses</Nav.Link>
                        <Nav.Link href={props.nav.projects}>Projects</Nav.Link>
                        <Nav.Link href={props.nav.contact}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Container>
        </Navbar>
    </Container>
  );
}

export default Navigation;

