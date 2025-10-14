import { Button, FloatingLabel, Form } from "react-bootstrap";
import React, { FormEvent } from "react";
import { useForm } from "@inertiajs/react";
import { error } from "console";

export default function CreateOrder() {
    const { data, setData, post, errors } = useForm({
        text: "",
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/order");
    }

    // console.log("errors order: ", errors);
    return (
        <div>
            <h3 className="text-center">Создание заявки</h3>
            <Form method="POST" onSubmit={submit}>
                <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Куда вы хотите полететь?"
                >
                    <Form.Control
                        as="textarea"
                        placeholder="Оставьте отзыв здесь"
                        onChange={(data) => setData("text", data.target.value)}
                        style={{ height: "100px" }}
                    />
                    {errors.text ?? (
                        <p className="invalid-feedback">{errors.text}</p>
                    )}
                </FloatingLabel>

                <div className="mt-3">
                    <Button variant="primary" type="submit">
                        Отправить заявку
                    </Button>
                </div>
            </Form>
        </div>
    );
}
