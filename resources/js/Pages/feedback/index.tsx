import React from "react";
import { Feedback, FeedbackPag, User } from "../../interface";
import { Head, Link, usePage } from "@inertiajs/react";
import Layout from "../Layout";
import { Card, Pagination } from "react-bootstrap";
import NotFoundRecords from "../../components/ui/NotFoundRecords";
import Paginate from "../../components/ui/Paginate";
import { Ruble } from "../../constants/Ruble";
import { route } from "ziggy-js";
export default function ViewFeedback() {
    const feedback = usePage().props.feedback as FeedbackPag;
    const { user } = usePage<{ auth: {user: User} }>().props.auth;
    // console.log("user: ", user);
    // console.log("View Feedback: ", feedback);

    return (
        <Layout title="Отзывы" title_h1>
            <div>
                {feedback.data.length > 0 ? (
                    <div>
                        <div className="d-flex flex-wrap justify-content-center">
                            {feedback.data.map((item, index) => (
                                <Card
                                    key={index}
                                    style={{ width: "18rem" }}
                                    className="m-2"
                                >
                                    <Card.Body>
                                        <Card.Title>
                                            {item.user_name}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {item.flying_title} |{" "}
                                            {item.flying_price} {Ruble}
                                        </Card.Subtitle>
                                        <Card.Subtitle className="mb-2 d-flex">
                                            {new Array(item.score)
                                                .fill(null)
                                                .map((_, index) => (
                                                    <div
                                                        className=""
                                                        key={index}
                                                    >
                                                        ⭐
                                                    </div>
                                                ))}
                                        </Card.Subtitle>
                                        <Card.Text>{item.text}</Card.Text>
                                        {user && user.role_name == "admin" && (
                                            <Link
                                                href={route("feedback.destroy", {feedback: item.id})}
                                                method="delete"
                                                className="text-danger"
                                            >
                                                Удалить
                                            </Link>
                                        )}
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                        {feedback.data.length > 5 && (
                            <div className="d-flex justify-content-center">
                                <Paginate item={feedback} />
                            </div>
                        )}
                    </div>
                ) : (
                    <NotFoundRecords text="Отзывы не найдены" />
                )}
            </div>
        </Layout>
    );
}
