import { InertiaFormProps, Link, useForm } from "@inertiajs/react";
import { FormEvent, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { HttpMethod } from "../helper/enum";
import { Flying, FlyingFormProps } from "../interface";
import { Ruble } from "../constants/Ruble";
import { route } from "ziggy-js";
import Back from "../components/ui/Back";
import { FileUploader } from "react-drag-drop-files";

export default function FlyingForm({
    method,
    url,
    textbutton = "Создать полёт",
    title = "",
    description = "",
    old_image = undefined,
    price = undefined,
    image = undefined,
}: FlyingFormProps) {
    const form = useForm({
        title,
        description,
        price,
        image,
    });

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        switch (method) {
            case HttpMethod.POST:
                form.post(url);
                break;
            case HttpMethod.PUT:
                // form.put(url);
                form.post(`${url}?_method=PUT`);
                break;
        }
    }

    function generateTempUrl() {
        if (form.data.image) setImageUrl(URL.createObjectURL(form.data.image));
    }

    useEffect(() => {
        generateTempUrl();
        console.log(form.data.image);
    }, [form.data.image]);

    return (
        <Form className="m-3 bg-form" onSubmit={submit}>
            {imageUrl || old_image ? (
                <div className="mb-3">
                    <p>Фото:</p>
                    {imageUrl ? (
                        <img width={300} src={imageUrl} alt={title} />
                    ) : (
                        old_image && (
                            <img width={300} src={old_image} alt={title} />
                        )
                    )}
                </div>
            ) : (
                <p>Картинка отсуствует</p>
            )}
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Заголовок</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите заголовок"
                    onChange={(e) => form.setData("title", e.target.value)}
                    value={form.data.title}
                />
                {form.errors.title && (
                    <p className="text-danger">{form.errors.title}</p>
                )}
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
                    <p className="text-danger">{form.errors.description}</p>
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
            {form.errors.price && (
                <p className="text-danger">{form.errors.price}</p>
            )}

            <div className="mb-3 mt-3">
                <FileUploader
                    label="Загрузите изображение вакансии"
                    handleChange={(e) => form.setData("image", e)}
                    uploadedLabel={`Image successfull loaded! ${form.data.image?.name}`}
                    types={["jpg", "jpeg", "png"]}
                    multiple={false}
                />
                {form.errors.image && (
                    <p className="text-danger">{form.errors.image}</p>
                )}
            </div>

            <div className="mt-3">
                <Button variant="primary" type="submit">
                    {textbutton}
                </Button>
            </div>
            {/* <Back pathName="flying.index" /> */}
        </Form>
    );
}
