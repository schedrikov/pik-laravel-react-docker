import {NavLink} from 'react-router-dom';
import {Container, Nav, Navbar} from "react-bootstrap";

export default function TopMenu() {
    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink exact="true" to="/" className="nav-link ps-3 pe-3">Главная</NavLink>
                        <NavLink exact="true" to="/create-apartment" className="nav-link ps-3 pe-3">Добавить квартиру</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}