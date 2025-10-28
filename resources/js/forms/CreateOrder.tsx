import { Button, FloatingLabel, Form } from "react-bootstrap";
import React, { FormEvent } from "react";
import { useForm } from "@inertiajs/react";
import { error } from "console";
import { CreateOrderProps } from "../interface";
import { Ruble } from "../constants/Ruble";
import { route } from "ziggy-js";

export default function CreateOrder({ flying }: CreateOrderProps) {
    const { data, setData, post, errors } = useForm({
        date: "",
        flying_id: 1,
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("order.store"));
    }

    // console.log("errors order: ", errors);
    return (
        <div>
            <h3 className="text-center">Создание заявки</h3>
            <Form method="POST" onSubmit={submit}>
                <Form.Group className="mb-3">
                    <Form.Label>Выберите желаемую дату</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Введите дату"
                        onChange={(e) => setData("date", e.target.value)}
                        value={data.date}
                    />
                    {errors.date && <p className="red">{errors.date}</p>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Выберите полёт</Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setData("flying_id", parseInt(e.target.value))}
                        value={data.flying_id}
                    >
                        {flying.map((item, index) => (
                            <option key={index} value={item.id}>
                                {item.title} - {item.price} {Ruble}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div className="mt-3">
                    <Button variant="primary" type="submit">
                        Отправить заявку
                    </Button>
                </div>
            </Form>
        </div>
    );
}
