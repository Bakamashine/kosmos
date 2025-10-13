import React from 'react';
import { Link, usePage } from "@inertiajs/react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { route } from "ziggy-js";
import { router } from "@inertiajs/react";
import { User } from "../Layout";

function Header() {
    const { props } = usePage<{ auth: { user: User } }>();
    const user = props.auth.user;

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto p-2">
                        <Nav className="m-2">
                            <Link className="btn btn-dark" href={route("main")}>Главная страница</Link>
                        </Nav>
                        {user !== undefined && user !== null ? (
                            <>
                                <Nav className="m-2">
                                    <Link className="btn btn-danger " method="post" href={route("logout")}>
                                        Выход
                                    </Link>
                                </Nav>
                                {user.role_name === "admin" && (
                                    <Nav className="m-2">
                                        <Link className="btn btn-dark" href={route("admin")}>
                                            Административная страница
                                        </Link>
                                    </Nav>
                                )}
                            </>
                        ) : (
                            <>
                                <Nav className="m-2">
                                    <Link className="btn btn-dark" href={route("login")}>
                                        Авторизоваться
                                    </Link>
                                </Nav>
                                <Nav className="m-2">
                                    <Link className="btn btn-dark" href={route("register")}>
                                        Регистрация
                                    </Link>
                                </Nav>
                            </>
                        )}
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
