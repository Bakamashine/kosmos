import { InertiaFormProps, Link, useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { HttpMethod } from "../helper/enum";
import { Flying, FlyingFormProps } from "../interface";
import { Ruble } from "../constants/Ruble";
import { route } from "ziggy-js";
import Back from "../components/Back";

export default function FlyingForm({
    method,
    url,
    title = "",
    description = "",
    price = undefined,
}: FlyingFormProps) {
    const form = useForm({
        title,
        description,
        price,
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        switch (method) {
            case HttpMethod.POST:
                form.post(url);
                break;
            case HttpMethod.PUT:
                form.put(url);
                break;
            default:
                throw new Error("Undefined HttpMethod");
        }
    }
    return (
        <Form className="m-3 bg-form" onSubmit={submit}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Заголовок</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите заголовок"
                    onChange={(e) => form.setData("title", e.target.value)}
                    value={form.data.title}
                />
                {form.errors.title && <p>{form.errors.title}</p>}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Описание</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Описание..."
                    onChange={(data) =>
                        form.setData("description", data.target.value)
                    }
                    style={{ height: "100px" }}
                    value={form.data.description}
                />
                {form.errors.description && (
                    <p className="">{form.errors.description}</p>
                )}
            </Form.Group>
            <InputGroup className="">
                <InputGroup.Text>{Ruble}</InputGroup.Text>
                <Form.Control
                    type="number"
                    min="0"
                    aria-label="Amount (to the nearest dollar)"
                    onChange={(e) =>
                        form.setData("price", parseInt(e.target.value))
                    }
                    value={form.data.price}
                />
            </InputGroup>
            {form.errors.price && <p className="red">{form.errors.price}</p>}
            <div className="mt-3">
                <Button variant="primary" type="submit">
                    Редактировать полёт
                </Button>
            </div>
            {Back("flying.index")}
        </Form>
    );
}
