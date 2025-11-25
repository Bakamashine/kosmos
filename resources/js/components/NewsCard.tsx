import React from "react";
import { News, NewsCardProps } from "../interface";
import { Card, ListGroup } from "react-bootstrap";
import { route } from "ziggy-js";
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
                <Link href={route("news.show", { news: id })}>Подробнее</Link>
                {redact && (
                    <div>
                        <div>
                            <Link href={route("news.edit", { news: id })}>
                                Редактировать
                            </Link>
                        </div>

                        <div>
                            <Link preserveScroll className="text-danger" method="delete" href={route("news.destroy", { news: id })}>
                                Удалить
                            </Link>
                        </div>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}
