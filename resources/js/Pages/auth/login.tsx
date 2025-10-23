import React, { useState, ChangeEvent, FormEvent } from "react";
import Layout from "../Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function Auth() {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("login.store"));
    }

    return (
        <Layout>
            <Head title="Авторизация" />
            <Form className="m-3 bg-form" onSubmit={handleSubmit}>
                <h5 className="text-center">Авторизация</h5>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Ваша почта</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Введите почту"
                        onChange={(e) => setData("email", e.target.value)}
                        value={data.email}
                    />
                    {errors.email && <p className="red">{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Введите пароль"
                        onChange={(e) => setData("password", e.target.value)}
                        value={data.password}
                    />
                    {errors.password && (
                        <p className="red">{errors.password}</p>
                    )}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Авторизоваться
                </Button>
            </Form>
        </Layout>
    );
}
