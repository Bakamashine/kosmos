import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";
import { Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function Footer() {
    const { appName } = usePage<{ appName: string }>().props;

    return (
        <MDBFooter
            bgColor="light"
            className="text-center text-lg-start text-muted"
        >
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Следуй за багровой луной</span>
                </div>

                <div>
                    <a href="" className="me-4 text-reset">
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className="">
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                {/* <MDBIcon icon="gem" className="me-3" /> */}
                                {appName}
                            </h6>
                            <p>
                                Мы — команда энтузиастов, увлечённых
                                астрономией, наукой и технологиями, которые
                                делают космос ближе к каждому. Наш сайт создан
                                для тех, кто хочет полететь на другую планету и
                                узнать о космических явлениях без сложных формул
                                и академического жаргона.
                            </p>
                        </MDBCol>

                        {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    Angular
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    React
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Vue
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Laravel
                                </a>
                            </p>
                        </MDBCol> */}

                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Полезные ссылки
                            </h6>
                            <p>
                                <Link
                                    className="text-reset"
                                    href={route("vacancy.index")}
                                >
                                    Вакансии
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className="text-reset"
                                    href={route("about_us")}
                                >
                                    О нас
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className="text-reset"
                                    href={route("feedback.index")}
                                >
                                    Отзывы
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md="4"
                            lg="3"
                            xl="3"
                            className="mx-auto mb-md-0 mb-4"
                        >
                            <h6 className="text-uppercase fw-bold mb-4">
                                Контакты
                            </h6>
                            <p>
                                {/* <MDBIcon icon="home" className="me-2" /> */}
                                Г.Борисоглебск ул.Первомайская д.122
                            </p>
                            <p>
                                {/* <MDBIcon icon="envelope" className="me-3" /> */}
                                dadamatov111@mail.ru
                            </p>
                            <p>
                                {/* <MDBIcon icon="phone" className="me-3" /> + 01 */}
                                +79805307440
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
               {appName} | © 2025 Copyright
            </div>
        </MDBFooter>
    );
}
