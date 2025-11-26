import React, { useState, ChangeEvent, FormEvent } from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Layout from "../Layout";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { route } from "ziggy-js";

export default function Register() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("register.store"));
    }
    return (
        <Layout title="Регистрация">
            <Form className="m-3 bg-form" onSubmit={handleSubmit}>
                <h5 className="text-center">Регистрация</h5>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Ваше имя</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите ваше имя"
                        onChange={(e) => setData("name", e.target.value)}
                        value={data.name}
                    />
                    {errors.name && (
                        <p className="text-danger">{errors.name}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Ваша почта</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Введите почту"
                        onChange={(e) => setData("email", e.target.value)}
                        value={data.email}
                    />
                    {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                    )}
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
                        <p className="text-danger">{errors.password}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="password_confirmation">
                    <Form.Label>Повторите пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Введите пароль"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        value={data.password_confirmation}
                    />
                    {errors.password_confirmation && (
                        <p className="text-danger">
                            {errors.password_confirmation}
                        </p>
                    )}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Регистрация
                </Button>
            </Form>
        </Layout>
    );
}
