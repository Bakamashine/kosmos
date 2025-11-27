import React from "react";
import { News, NewsCardProps } from "../interface";
import { Card, ListGroup } from "react-bootstrap";
import { Link, router } from "@inertiajs/react";

export default function NewsCard({
    title,
    description,
    id,
    marginBottom = "10px",
    redact = false,
}: NewsCardProps) {
    return (
        <Card style={{ width: "18rem", marginBottom }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Link href={`/news/${id}`}>Подробнее</Link>
                {redact && (
                    <div>
                        <div>
                            <Link href={`/news/${id}/edit`}>Редактировать</Link>
                        </div>

                        <div>
                            <Link
                                preserveScroll
                                className="text-danger"
                                method="delete"
                                href={`/news/${id}`}
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
