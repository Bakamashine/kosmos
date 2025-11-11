import React from "react";
import { Feedback, FeedbackPag } from "../../interface";
import { Head, usePage } from "@inertiajs/react";
import Layout from "../Layout";
import { Card, Pagination } from "react-bootstrap";
import NotFoundRecords from "../../components/NotFoundRecords";
import Paginate from "../../components/Paginate";
import { Ruble } from "../../constants/Ruble";
export default function ViewFeedback() {
    const feedback = usePage().props.feedback as FeedbackPag;
    console.log("View Feedback: ", feedback);

    const title = "Отзывы";
    return (
        <Layout>
            <Head title={title} />
            <h1 className="text-center">{title}</h1>

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
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                        {feedback.data.length >= 5 && (
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
