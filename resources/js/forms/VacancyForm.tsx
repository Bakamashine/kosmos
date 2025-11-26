import React, {
    FormEvent,
    HTMLInputTypeAttribute,
    lazy,
    useEffect,
    useState,
} from "react";
import { HttpMethod } from "../helper/enum";
import { NewsFormProps } from "../interface";
import { Button, Form } from "react-bootstrap";
import { useForm } from "@inertiajs/react";
// import { FileUploader } from "react-drag-drop-files";
import Back from "../components/ui/Back";
import { route } from "ziggy-js";
import CustomDropZone from "../components/DropZone";

interface VacancyFormProps extends NewsFormProps {
    image?: File;
    old_image?: string;
    payment?: number;
}
export default function VacancyForm({
    title = "",
    description = "",
    image = undefined,
    method,
    old_image = undefined,
    payment = 0,
    url,
    textbutton = "Создать вакансию",
}: VacancyFormProps) {
    const form = useForm({
        title,
        description,
        image,
        payment,
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
        console.log("Image: ", form.data.image)
        generateTempUrl();
    }, [form.data.image]);

    return (
        <Form className="m-3 bg-form" onSubmit={submit}>
            {imageUrl || old_image ? (
                <div className="mb-3">
                    <p>Фото:</p>
                    {imageUrl ? (
                        <img width={300} src={imageUrl} alt={title} />
                    ) : (
                        old_image && <img width={300} src={old_image} alt={title} />
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

            <Form.Group className="mb-3">
                <Form.Label>Зарплата</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Зарплата работника..."
                    onChange={(e) =>
                        form.setData("payment", parseInt(e.target.value))
                    }
                    value={form.data.payment}
                />
                {form.errors.payment && (
                    <p className="text-danger">{form.errors.payment}</p>
                )}
            </Form.Group>

            <div className="mb-3">
                {/* <FileUploader
                    label="Загрузите изображение вакансии"
                    handleChange={(e) => form.setData("image", e)}
                    uploadedLabel={`Image successfull loaded! ${form.data.image?.name}`}
                    types={["jpg", "jpeg", "png"]}
                    multiple={false}
                /> */}

                <CustomDropZone callback={(file) => {
                    form.setData("image", file);
                }} />
                {form.errors.image && (
                    <p className="text-danger">{form.errors.image}</p>
                )}
            </div>

            <Button variant="primary" type="submit">
                {textbutton}
            </Button>
            {/* <Back pathName={route("vakancies.management")} /> */}
        </Form>
    );
}
