import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { User } from "../interface";

function Header() {
    const { props } = usePage<{ auth: { user: User }; appName: string }>();
    const user = props.auth.user;
    // console.log(props.appName);
    // console.log(user)

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link className="non-border" href={"/"}>
                        <Navbar.Brand>{props.appName}</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto p-2">
                            <Nav className="m-2">
                                <Link
                                    className="btn btn-dark"
                                    href={"/"}
                                >
                                    Главная страница
                                </Link>
                            </Nav>
                            <Nav className="m-2">
                                <Link
                                    className="btn btn-dark"
                                    href={"/about_us"}
                                >
                                    О нас
                                </Link>
                            </Nav>
                            <Nav className="m-2">
                                <Link
                                    className="btn btn-dark"
                                    href={"/feedback"}
                                >
                                    Отзывы
                                </Link>
                            </Nav>
                            <Nav className="m-2">
                                <Link
                                    className="btn btn-dark"
                                    href={"/vacancy"}
                                >
                                    Вакансии
                                </Link>
                            </Nav>
                            {user !== undefined && user !== null ? (
                                <>
                                    <Nav className="m-2">
                                        <Link
                                            className="btn btn-dark "
                                            href={"/home"}
                                        >
                                            Домашняя страница
                                        </Link>
                                    </Nav>
                                    <Nav className="m-2">
                                        <Link
                                            className="btn btn-danger "
                                            method="post"
                                            href={"/logout"}
                                        >
                                            Выход
                                        </Link>
                                    </Nav>
                                    {user.role_name === "admin" && (
                                        <Nav className="m-2">
                                            <Link
                                                className="btn btn-dark"
                                                href={"/admin"}
                                            >
                                                Административная страница
                                            </Link>
                                        </Nav>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Nav className="m-2">
                                        <Link
                                            className="btn btn-dark"
                                            href={"/login"}
                                        >
                                            Авторизоваться
                                        </Link>
                                    </Nav>
                                    <Nav className="m-2">
                                        <Link
                                            className="btn btn-dark"
                                            href={"/register"}
                                        >
                                            Регистрация
                                        </Link>
                                    </Nav>
                                </>
                            )}
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
                        </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
