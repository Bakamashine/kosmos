import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { Flying } from "../../interface";
import Layout from "../Layout";
import { route } from "ziggy-js";

export default function ShowFlying() {
    const { flying } = usePage<{ flying: Flying }>().props;

    // console.log("Flying: ", flying);

    return (
        <Layout title={flying.title} title_h1>
            <div className="p-3 border">
                <p>Название: {flying.title}</p>
                <p>Описание: {flying.description}</p>
                <p>Цена: {flying.price}</p>
                <p>Дата: {new Date(flying.created_at).toLocaleDateString()}</p>
            </div>

            <Link
                className="btn btn-dark"
                href={route("flying.edit", { flying: flying.id })}
            >
                Редактировать
            </Link>
            {/* <Link method="delete" className="btn btn-danger" href={route("flying.destroy", {flying: flying.id})}>Удалить</Link> */}
        </Layout>
    );
}
