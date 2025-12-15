import { Button, Form } from "react-bootstrap";
import Layout from "../Layout";
import React, { FormEvent } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Flying } from "../../interface";

export default function CreateOrder() {
    const title = "Создание заявки";
    const {flying} = usePage<{flying: Flying}>().props;
    const { data, setData, post, errors } = useForm({
        date: "",
        flying_id: flying.id,
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/order");
    }
    return (
        <Layout title={title} title_h1>
            <Form method="POST" onSubmit={submit}>
                <Form.Group className="mb-3">
                    <Form.Label>Выберите желаемую дату</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Введите дату"
                        onChange={(e) => setData("date", e.target.value)}
                        value={data.date}
                    />
                    {errors.date && (
                        <p className="text-danger">{errors.date}</p>
                    )}
                </Form.Group>
                <div className="mt-3">
                    <Button variant="primary" type="submit">
                        Отправить заявку
                    </Button>
                </div>
            </Form>
        </Layout>
    );
}
