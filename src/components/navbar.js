import '@/assets/styles/header.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarHeader() {
  return (
    <Navbar collapseOnSelect data-bs-theme="light" expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand>Meu Portfólio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about-me">Sobre mim</Nav.Link>
            <Nav.Link href="#skills">Habilidades</Nav.Link>
            <Nav.Link href="#projects">Projetos</Nav.Link>
            <Nav.Link href="#contact-me">Fale Comigo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;