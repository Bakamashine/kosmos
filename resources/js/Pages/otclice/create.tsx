import React, { FormEvent } from "react";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { IOtclice, Vacancy } from "../../interface";
import Layout from "../Layout";
import { Button, Form } from "react-bootstrap";
import { route } from "ziggy-js";
import { validateHeaderValue } from "http";

export default function CreateOtclice() {
    const { vacancy } = usePage<{ vacancy: Vacancy }>().props;

    console.log(vacancy);
    const title = "Создание отклика";
    const { data, setData, post, errors } = useForm({
        description: "",
        vacancy_id: vacancy.id,
    });
    console.log(errors);
    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("otclice.store"));
    };
    return (
        <Layout>
            <Head title={title} />
            <h1 className="text-center">{title}</h1>

            <div>
                <div>
                    <h5 className="">
                        Вакансия на которую вы хотите откликнутся:{" "}
                    </h5>
                    <div className="border p-3">
                        <p>Название: {vacancy.title}</p>
                        <p>Описание: {vacancy.description}</p>
                        <img src={vacancy.image} />
                    </div>
                </div>
                <Form className="mb-3 bg-form" onSubmit={submit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Ваше Резюме</Form.Label>
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

                {errors.vacancy_id && (
                    <p className="text-center text-danger">{errors.vacancy_id}</p>
                )}
            </div>
        </Layout>
    );
}
