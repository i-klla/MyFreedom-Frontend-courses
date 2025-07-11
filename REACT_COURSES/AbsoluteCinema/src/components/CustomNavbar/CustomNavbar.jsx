import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router';

function CustomNavbar() {

  const navigate = useNavigate()

  function goToSigninPage() {
        navigate('/sign-in') // функция для перехода на страницу входа
    }

    return (
        <Navbar expand="sm" className="bg-body-tertiary">
        <Container fluid="xl">
          <Navbar.Brand href="#">AbsoluteCinema</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button onClick={goToSigninPage} variant="outline-success">Sign-in</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default CustomNavbar
