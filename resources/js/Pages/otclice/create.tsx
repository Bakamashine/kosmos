import React, { FormEvent } from "react";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { IOtclice } from "../../interface";
import Layout from "../Layout";
import { Button, Form } from "react-bootstrap";
import { route } from "ziggy-js";

export default function CreateOtclice() {
    const { otclice } = usePage<{ otclice: IOtclice }>().props;

    const title = "Создание отклика";
    const { data, setData, post, errors } = useForm({
        description: "",
        vacancy_id: otclice.vacancy_id
    });
    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("otclice.store"));
    };
    return (
        <Layout>
            <Head title={title} />
            <h1 className="text-center">{title}</h1>

            <div>
                <Form className="mb-3 bg-form" onSubmit={submit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Резюме</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Резюме..."
                            onChange={(data) =>
                                setData("description", data.target.value)
                            }
                            style={{ height: "100px" }}
                            value={data.description}
                        />
                        {errors.description && (
                            <p className="text-danger">{errors.description}</p>
                        )}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Оставить отклик
                    </Button>
                </Form>
            </div>
        </Layout>
    );
}
