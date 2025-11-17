import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { Order } from "../../interface";
import Layout from "../Layout";
import { route } from "ziggy-js";

export default function ShowOrder() {
    const { order } = usePage<{ order: Order }>().props;

    // console.log("Order: ", order);
    const title = `${new Date(order.date).toLocaleDateString()} заявка`;
    return (
        <Layout title={title} title_h1>

            <div className="p-3 border">
                <p>Стоимость полёта: {order.flying_price}</p>
                <p>Название полёта: {order.flying_title}</p>
                <p>Статус: {order.status}</p>
                <p>Имя пользователя: {order.user_name}</p>
                <p>Дата: {new Date(order.date).toLocaleDateString()}</p>
                <p>
                    ID пользователя:{" "}
                    <Link href={route("user.show", { user: order.user_id })}>
                        {order.user_id}
                    </Link>{" "}
                </p>
                <p>
                    ID полёта:{" "}
                    <Link
                        href={route("flying.show", { flying: order.flying_id })}
                    >
                        {order.flying_id}
                    </Link>
                </p>
            </div>

            {/* <Link method="delete" href={route("order.destroy", {order: order.id})}>Удалить</Link> */}
        </Layout>
    );
}
