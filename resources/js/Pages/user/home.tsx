import React, { ChangeEvent, FormEvent, useState } from "react";
import Layout from "../Layout";
import { route } from "ziggy-js";
import { Button, FloatingLabel, Form, ListGroup } from "react-bootstrap";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { Feedback } from "../../interface";
import CreateFeedback from "../../forms/CreateFeedback";
import CreateOrder from "../../forms/CreateOrder";

export default function Home() {
    const props = usePage().props;
    const feedbacks = props.feedbacks as Array<Feedback>;
    // console.log("feedbacks: ", feedbacks);

    return (
        <Layout>
            <Head title="Домашняя страница" />
            <h1 className="text-center">Домашняя страница</h1>

            {feedbacks && (
                <ListGroup>
                    {feedbacks.map((item, index) => (
                        <ListGroup.Item key={index}>
                            {item.feedback}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            <div>
                <CreateFeedback />
            </div>
            <div>
                <CreateOrder />
            </div>
        </Layout>
    );
}
