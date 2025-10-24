import React, { ChangeEvent, FormEvent, useState } from "react";
import Layout from "../Layout";
import { route } from "ziggy-js";
import { Button, FloatingLabel, Form, ListGroup } from "react-bootstrap";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import {
    CreateOrderProps,
    Feedback,
    FlyingOrderPick,
    Order,
    OrderUser,
} from "../../interface";
import CreateFeedback from "../../forms/CreateFeedback";
import CreateOrder from "../../forms/CreateOrder";
import { Ruble } from "../../constants/Ruble";

export default function Home() {
    const props = usePage().props;
    const feedbacks = props.feedbacks as Feedback[];
    const success = props.success as string;
    const flying = props.flying as FlyingOrderPick[];
    const orders = props.orders as OrderUser[];

    console.log("feedbacks: ", feedbacks);
    console.log("success: ", success);
    console.log("flying: ", flying);
    console.log("orders: ", orders);

    return (
        <Layout>
            <Head title="Домашняя страница" />
            <h1 className="text-center">Домашняя страница</h1>

            {feedbacks.length > 0 && (
                <div>
                    <h3 className="text-center">Ваши отзывы</h3>
                    <ListGroup>
                        {feedbacks.map((item, index) => (
                            <ListGroup.Item key={index}>
                                {item.feedback}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            )}

            {orders.length > 0 && (
                <div>
                    <ListGroup>
                        <h3 className="text-center">Ваши заявки</h3>
                        {orders.map((item, index) => (
                            <ListGroup.Item key={index}>
                                {item.status} | {item.flying_title} |{" "}
                                {item.flying_price} {Ruble}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            )}
            <div>
                <CreateFeedback />
            </div>
            <div>
                <CreateOrder flying={flying} />
                {success !== undefined && <p>{success}</p>}
            </div>
        </Layout>
    );
}
