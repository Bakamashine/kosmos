import React from "react";
import { Card, ListGroup, NavItem } from "react-bootstrap";
import { User, Vacancy } from "../interface";
import { Ruble } from "../constants/Ruble";
import { Link, usePage } from "@inertiajs/react";

interface VacancyCardProps extends Vacancy {
    deleted?: boolean;
}
export default function VacancyCard({
    title,
    description,
    image,
    payment,
    id,
    deleted = false,
    deleted_at = undefined,
}: VacancyCardProps) {
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
            </ListGroup>
            <Card.Body>
                {!deleted && (
                    <Link method="get" href={`/otclice/${id}/create`}>Откликнутся</Link>
                )}
                {user && user.role_name == "admin" && (
                    <div>
                        {!deleted && (
                            <div>
                                <Link
                                    href={`/vacancy/${id}/edit`}
                                >
                                    Редактировать вакансию
                                </Link>
                            </div>
                        )}
                        {!deleted && (
                            <div>
                                <Link
                                    preserveScroll
                                    className="text-danger"
                                    href={`/vacancy/${id}`}
                                    method="delete"
                                >
                                    Удалить
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}
