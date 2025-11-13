import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { User, Vacancy } from "../interface";
import { Ruble } from "../constants/Ruble";
import { Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function VacancyCard({
    title,
    description,
    image,
    payment,
    id,
    deleted_at = undefined,
}: Vacancy) {
    const { user } = usePage<{ auth: { user: User } }>().props.auth;
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Название: {title}</Card.Title>
                <Card.Text>Описание: {description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    Зарплата: {payment} {Ruble}
                </ListGroup.Item>
                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Забронировать</Card.Link>
                {user.role_name == "admin" && (
                    <div>
                        <div>
                            <Link href={route("vacancy.edit", { vacancy: id })}>
                                Редактировать вакансию
                            </Link>
                        </div>
                        <div>
                            <Link
                                className="text-danger"
                                href={route("vacancy.destroy", {
                                    vacancy: id,
                                })}
                                method="delete"
                            >
                                Удалить
                            </Link>
                        </div>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}
