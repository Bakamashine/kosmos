import React, { FormEvent } from "react";
import Layout from "../Layout";
import { Button, Form, Table } from "react-bootstrap";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Order } from "../../interface";
import { route } from "ziggy-js";

export default function Admin() {
    const { props } = usePage();
    const orders = props.order as Order[];
    const orders_status = props.order_status as string[];

    const { data, setData, patch, errors } = useForm({
        status: "0",
    });

    function submit(e: FormEvent<HTMLFormElement>, id: number) {
        e.preventDefault();
        patch(route("order.update", { order: id }));
    }

    return (
        <Layout>
            <Head title="Административная страница" />
            <h1 className="text-center">
                Добро пожаловать на административную страницу
            </h1>
            <div>
                <h3 className="text-center">Все заявки пользователей</h3>
                {orders.length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Имя пользователя</th>
                                <th>Его ID</th>
                                <th>Текст заявки</th>
                                <th>Статус заявки</th>
                                <th>-</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.user_name}</td>
                                    <td>{item.user_id}</td>
                                    <td>{item.text}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <Form
                                            onSubmit={(e) => submit(e, item.id)}
                                        >
                                            <Form.Select

                                                aria-label="Default select example"
                                                onChange={(data) =>
                                                    setData(
                                                        "status",
                                                        data.target.value
                                                    )
                                                }
                                                value={data.status}
                                                // name="status"
                                            >
                                                {orders_status.map(
                                                    (item, index) => (
                                                        <option
                                                            key={index}
                                                        >
                                                            {item}
                                                        </option>
                                                    )
                                                )}
                                            </Form.Select>
                                                <Button type={"submit"} className="btn btn-dark">
                                                    Смена статуса
                                                </Button>
                                        </Form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p className="text-center">Заявок нет</p>
                )}
            </div>
        </Layout>
    );
}
