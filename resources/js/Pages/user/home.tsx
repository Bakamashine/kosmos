import React, { ChangeEvent, FormEvent, useState } from "react";
import Layout from "../Layout";
import { route } from "ziggy-js";
import { Button, FloatingLabel, Form, ListGroup } from "react-bootstrap";
import { router, useForm, usePage } from "@inertiajs/react";
import { Feedback } from "../../interface";

export default function Home() {
    const props = usePage().props;
    const feedbacks = props.feedbacks as Array<Feedback>;
    console.log("feedbacks: ", feedbacks);
    const { data, setData, post, errors } = useForm({
        feedback: "",
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/feedback");
    }
    console.log("errors: ", errors);

    return (
        <Layout>
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

            <h3 className="text-center">Создание отзывов</h3>
            <div>
                <Form method="POST" onSubmit={submit}>
                    <FloatingLabel controlId="floatingTextarea2" label="Отзыв">
                        <Form.Control
                            as="textarea"
                            placeholder="Оставьте отзыв здесь"
                            onChange={(data) =>
                                setData("feedback", data.target.value)
                            }
                            style={{ height: "100px" }}
                        />
                        {errors.feedback && (
                            <p className="invalid-feedback">
                                {errors.feedback}
                            </p>
                        )}
                    </FloatingLabel>

                    <div className="mt-3">
                        <Button variant="primary" type="submit">
                            Сделать отзыв
                        </Button>
                    </div>
                </Form>
            </div>
        </Layout>
    );
}
