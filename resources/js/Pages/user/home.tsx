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
    SuccessOrder,
} from "../../interface";
import CreateFeedback from "../../forms/CreateFeedback";
import CreateOrder from "../../forms/CreateOrder";
import { Ruble } from "../../constants/Ruble";
import NotFoundRecords from "../../components/ui/NotFoundRecords";

export default function Home() {
    const props = usePage().props;
    const feedbacks = props.feedbacks as Feedback[];
    const success = props.success as string;
    const flying = props.flying as FlyingOrderPick[];
    const orders = props.orders as OrderUser[];
    const success_order = props.success_order as SuccessOrder[];

    // console.log("feedbacks: ", feedbacks);
    // console.log("success: ", success);
    // console.log("flying: ", flying);
    // console.log("orders: ", orders);
    // console.log("success_order", success_order);

    return (
        <Layout>
            <Head title="Домашняя страница" />
            <h1 className="text-center">Домашняя страница</h1>

            {feedbacks.length > 0 ? (
                <div>
                    <h3 className="text-center">Ваши отзывы</h3>
                    <ListGroup>
                        {feedbacks.map((item, index) => (
                            <ListGroup.Item key={index}>
                                Text: {item.text} | Score: {item.score} | Flying
                                name: {item.flying_title} | Date:{" "}
                                {item.date &&
                                    new Date(item.date).toLocaleString()}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            ) : (
                <NotFoundRecords text="У вас нет отзывов" />
            )}

            {orders.length > 0 ? (
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
            ) : (
                <NotFoundRecords text="Ваши заявки не обнаружены" />
            )}
            {success_order && success_order.length > 0 ? (
                <div>
                    <CreateFeedback success_order={success_order} />
                </div>
            ) : (
                <NotFoundRecords text="Вы не можете оставить отзыв, т.к у вас нет ни одного завершённого полёта" />
            )}

            {flying && flying.length > 0 ? (
                <div>
                    <CreateOrder flying={flying} />
                    {success !== undefined && (
                        <p className="text-success">{success}</p>
                    )}
                </div>
            ) : (
                <NotFoundRecords text="Вы не можете сделать заявку, т.к нет полётов" />
            )}
        </Layout>
    );
}
