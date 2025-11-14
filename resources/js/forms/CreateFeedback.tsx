import { useForm } from "@inertiajs/react";
import React, { FormEvent } from "react";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { Flying, SuccessOrder } from "../interface";
import { route } from "ziggy-js";

interface CreateFeedbackProps {
    success_order: SuccessOrder[];
}

export default function CreateFeedback({ success_order }: CreateFeedbackProps) {
    const { data, setData, post, errors } = useForm({
        text: "",
        score: 1,
        order_id: 1,
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("feedback.store"));
    }
    // console.log("Create feedback errors: ", errors);
    return (
        <div>
            <h3 className="text-center">Создание отзывов</h3>
            <Form method="POST" onSubmit={submit}>
                <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Отзыв"
                    className="mb-3"
                >
                    <Form.Control
                        as="textarea"
                        placeholder="Оставьте отзыв здесь"
                        onChange={(data) => setData("text", data.target.value)}
                        style={{ height: "100px" }}
                    />
                    {errors.text ?? (
                        <p className="text-danger">{errors.text}</p>
                    )}
                </FloatingLabel>

                <InputGroup className="mb-3">
                    <InputGroup.Text>Оценка</InputGroup.Text>
                    <Form.Control
                        type="number"
                        min="1"
                        max="5"
                        aria-label="Amount (to the nearest dollar)"
                        onChange={(e) =>
                            setData("score", parseInt(e.target.value))
                        }
                        value={data.score}
                    />
                </InputGroup>
                {errors.score && <p className="text-danger">{errors.score}</p>}

                <Form.Group className="mb-3">
                    <Form.Label>Выберите полёт</Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        onChange={(e) =>
                            setData("order_id", parseInt(e.target.value))
                        }
                        value={data.order_id}
                    >
                        {success_order.map((item, index) => (
                            <option key={index} value={item.order_id}>
                                {item.title}
                            </option>
                        ))}
                    </Form.Select>
                    {errors.order_id && (
                        <p className="text-danger">{errors.order_id}</p>
                    )}
                </Form.Group>

                <div className="mt-3">
                    <Button variant="primary" type="submit">
                        Сделать отзыв
                    </Button>
                </div>
            </Form>
        </div>
    );
}
