import { Head, useForm, usePage } from "@inertiajs/react";
import React, { FormEvent } from "react";
import { Roles, User, UserUpdate } from "../../interface";
import Layout from "../Layout";
import { Button, Form } from "react-bootstrap";
import { route } from "ziggy-js";
import Back from "../../components/ui/Back"

export default function EditUser() {
    const { name, email, status, role_name, role_id, id } = usePage().props
        .user as UserUpdate;
    const roles = usePage().props.role as Roles[];
    const user = usePage().props.user;
    console.log("Edit user: ", user);
    console.log("Edit user roles: ", roles);

    const { data, setData, put, errors } = useForm({
        name,
        email,
        status,
        role_id,
    });
    console.log("Edit user errors: ", errors)
    function submit(e: FormEvent<HTMLFormElement>) {
        console.log("submit!");
        e.preventDefault();
        put(route("user.update", { user: id }));
    }

    return (
        <Layout>
            <Head title={`Редактирование: ${name}`} />
            <h1 className="text-center">Редактирование пользователя</h1>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите заголовок"
                        onChange={(e) => setData("name", e.target.value)}
                        value={data.name}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Почта пользователя</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите почту"
                        onChange={(e) => setData("email", e.target.value)}
                        value={data.email}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Роль</Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        onChange={(e) =>
                            setData("role_id", parseInt(e.target.value))
                        }
                        value={data.role_id}
                    >
                        {roles.map((item, index) => (
                            <option key={index} value={item.id}>
                                {item.role_name} - {item.abilities}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Button type="submit" className="btn btn-dark">
                    Обновить пользователя
                </Button>
                <Back pathName="user.index" />
            </Form>
        </Layout>
    );
}
