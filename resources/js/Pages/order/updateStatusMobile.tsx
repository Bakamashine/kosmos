import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { FormEvent } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { route } from "ziggy-js";
import { Order, OrderPag } from "../../interface";
import Layout from "../Layout";
import Paginate from "../../components/ui/Paginate";
export default function UpdateStatusMobile() {
    const { props } = usePage();
    const orders = props.order as OrderPag;
    const orders_status = props.order_status as string[];
    // console.log(orders);
    const { data, setData, patch, errors } = useForm({
        status: "0",
    });

    function submit(e: FormEvent<HTMLFormElement>, id: number) {
        e.preventDefault();
        patch(route("order.update", { order: id }));
    }
    const title = "Обновление статуса";
    return (
        <Layout title={title} title_h1>
            <div className="news">
                {orders.data.map((item, index) => (
                    <Card key={index} style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>{item.flying_title}</Card.Title>
                            <Card.Text>{item.status}</Card.Text>
                            <Card.Text>{item.user_name}</Card.Text>

                            <Card.Footer>
                                <Form onSubmit={(e) => submit(e, item.id)}>
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(data) =>
                                            setData("status", data.target.value)
                                        }
                                        defaultValue={item.status}
                                        // value={data.status}
                                    >
                                        {orders_status.map((item, index) => (
                                            <option key={index}>{item}</option>
                                        ))}
                                    </Form.Select>
                                    <div className="mt-2 d-flex justify-content-center">
                                        <Button
                                            type={"submit"}
                                            className="btn btn-dark"
                                        >
                                            Смена статуса
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            {orders.total > 5 && (
                <div className="d-flex justify-content-center">
                    <Paginate item={orders} />
                </div>
            )}
        </Layout>
    );
}
