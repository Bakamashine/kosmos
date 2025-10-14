import { useForm } from "@inertiajs/react";
import React, { FormEvent } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

export default function CreateFeedback() {
    const {
        data: dataFeedback,
        setData: setDataFeedback,
        post: PostFeedback,
        errors,
    } = useForm({
        feedback: "",
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        PostFeedback("/feedback");
    }
    return (
        <div>
            <h3 className="text-center">Создание отзывов</h3>
            <Form method="POST" onSubmit={submit}>
                <FloatingLabel controlId="floatingTextarea2" label="Отзыв">
                    <Form.Control
                        as="textarea"
                        placeholder="Оставьте отзыв здесь"
                        onChange={(data) =>
                            setDataFeedback("feedback", data.target.value)
                        }
                        style={{ height: "100px" }}
                    />
                    {errors.feedback ?? (
                        <p className="invalid-feedback">{errors.feedback}</p>
                    )}
                </FloatingLabel>

                <div className="mt-3">
                    <Button variant="primary" type="submit">
                        Сделать отзыв
                    </Button>
                </div>
            </Form>
        </div>
    );
}
