import React, { useState, ChangeEvent, FormEvent } from "react";
import { Head, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Layout from "../Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface RegisterInterface {
    email: string;
    password: string;
    password_confirmation: string;
    name: string;
}

function Register() {
    const { errors } = usePage<{ errors: Error }>().props;

    const [values, setValues] = useState<RegisterInterface>({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
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
        router.post("/register", values as Record<string, any>);
    }

    return (
        <Layout>
            <Head title="Регистрация" />
            <Form className="m-3 bg-form" onSubmit={handleSubmit}>
                <h5 className="text-center">Регистрация</h5>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Ваше имя</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите ваше имя"
                        onChange={handleChange}
                        value={values.name}
                    />
                    <p className="red">{errors.name}</p>
                </Form.Group>

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


                <Form.Group className="mb-3" controlId="password_confirmation">
                    <Form.Label>Повторите пароль</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите пароль"
                        onChange={handleChange}
                        value={values.password_confirmation}
                    />
                </Form.Group>
                <p className="red">{errors.password_confirmation}</p>
                <Button variant="primary" type="submit">
                    Регистрация
                </Button>
            </Form>
        </Layout>
    );
}

export default Register;
