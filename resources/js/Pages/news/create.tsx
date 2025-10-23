import { Head, router, useForm, usePage } from "@inertiajs/react";
import Layout from "../Layout";
import { Button, Form } from "react-bootstrap";
import { ChangeEvent, FormEvent, useState } from "react";
import { News } from "../../interface";
import { route } from "ziggy-js";
import NewsForm from "../../forms/NewsForm";
import { HttpMethod } from "../../helper/enum";

export default function CreateNews() {
    const { data, setData, post, errors } = useForm({
        title: "",
        description: "",
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("news.store"));
    }

    const title = "Создание новости";

    return (
        <Layout>
            <Head title={title} />
            <h5 className="text-center">{title}</h5>

            <NewsForm method={HttpMethod.POST} url={route("news.store")} />
            {/*<Form className="m-3 bg-form" onSubmit={submit}>
                 <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Заголовок</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Введите заголовок"
                        onChange={(e) => setData("title", e.target.value)}
                        value={data.title}
                    />
                    {errors.title && (
                        <p className="invalid-feedback">{errors.title}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Описание..."
                        onChange={(data) =>
                            setData("description", data.target.value)
                        }
                        style={{ height: "100px" }}
                    />
                    {errors.description && (
                        <p className="invalid-feedback">{errors.description}</p>
                    )}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Создать новость
                </Button>
            </Form> */}
        </Layout>
    );
}
