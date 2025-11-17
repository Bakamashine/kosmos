import React, { FormEvent } from "react";
import Layout from "../Layout";
import { Head, useForm } from "@inertiajs/react";
import { Button, Form } from "react-bootstrap";
import { route } from "ziggy-js";
export default function CreateUser() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("user.store"));
    }

    const title = "Создание пользователя";
    return (
        <Layout title={title}>
            <Form className="m-3 bg-form" onSubmit={handleSubmit}>
                <h5 className="text-center">{title}</h5>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите имя пользователя"
                        onChange={(e) => setData("name", e.target.value)}
                        value={data.name}
                    />
                    {errors.name && <p className="red">{errors.name}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Почта пользователя</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Введите почту пользователя"
                        onChange={(e) => setData("email", e.target.value)}
                        value={data.email}
                    />
                    {errors.email && <p className="red">{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Пароль пользователя</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Введите пароль пользователя"
                        onChange={(e) => setData("password", e.target.value)}
                        value={data.password}
                    />
                    {errors.password && (
                        <p className="red">{errors.password}</p>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Регистрация
                </Button>
            </Form>
        </Layout>
    );
}
