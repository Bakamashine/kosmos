import { InertiaFormProps, useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { HttpMethod } from "../helper/enum";

interface NewsFormProps {
    // submit: (e: FormEvent<HTMLFormElement>) => void;
    method: HttpMethod;
    url: string;
    title?: string;
    description?: string;
}
export default function NewsForm({
    method,
    url,
    title = "",
    description = "",
}: NewsFormProps) {
    const form = useForm({
        title,
        description,
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
            <Button variant="primary" type="submit">
                Создать новость
            </Button>
        </Form>
    );
}
