import React, { useState, ChangeEvent, FormEvent } from "react";
import Layout from "../Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormDataVisitorHelpers } from "axios";
import { Head, router, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

interface LoginInterface {
    email: string;
    password: string;
}

function Auth() {
    const { errors } = usePage<{ errors: Error }>().props;

    const [values, setValues] = useState<LoginInterface>({
        email: "",
        password: "",
    });

    /**
     * Изменение значений в компоненте
     * @param e
     */
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    }

    /**
     * Отправка формы
     * @param e
     */
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post("/login", values as Record<string, any>);
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
                        onChange={handleChange}
                        value={values.email}
                    />
                    <p className="red">{errors.email}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите пароль"
                        onChange={handleChange}
                        value={values.password}
                    />
                </Form.Group>
                    <p className="red">{errors.password}</p>
                <Button variant="primary" type="submit">
                    Авторизоваться
                </Button>
            </Form>
        </Layout>
    );
}

export default Auth;
