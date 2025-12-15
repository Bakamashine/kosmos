import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Flying, User, Vacancy } from "../interface";
import { Ruble } from "../constants/Ruble";
import { Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function FlyingCard({
    title,
    description,
    image = undefined,
    price,
    id,
}: Flying) {
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
                    Стоимость: {price} {Ruble}
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Link href={`/order/${id}/create`} className="d-block">Создать заявку</Link>
                <Link href={`/flying/${id}`} className="d-block">Подробнее</Link>
                {user && user.role_name == "admin" && (
                    <div className="mt-3">
                        <Link
                            preserveScroll
                            href={`/flying/${id}`}
                            method="delete"
                            className="text-danger d-block"
                        >
                            Удалить
                        </Link>
                        <Link href={`/flying/${id}/edit`}>Редактировать</Link>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}
