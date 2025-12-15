import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { Flying, User } from "../../interface";
import Layout from "../Layout";
import { route } from "ziggy-js";

export default function ShowFlying() {
    const { flying } = usePage<{ flying: Flying }>().props;
    const { user } = usePage<{ auth: { user: User } }>().props.auth;
    // console.log("Flying: ", flying);

    return (
        <Layout title={flying.title} title_h1>
            <div className="p-3 border">
                {flying.image && (
                    <div className="mb-3 mt-3">
                        <p>Фото: </p>
                        <img
                            src={flying.image}
                            alt={flying.title}
                            width={300}
                        />
                    </div>
                )}
                <p>Название: {flying.title}</p>
                <p>Описание: {flying.description}</p>
                <p>Цена: {flying.price}</p>
                <p>Дата: {new Date(flying.created_at).toLocaleDateString()}</p>
            </div>
            {user && user.role_name === "admin" && (
                <Link
                    className="btn btn-dark"
                    href={`/flying/${flying.id}/edit`}
                >
                    Редактировать
                </Link>
            )}
            {user && (
                <Link href={`/order/${flying.id}/create`} className="d-block">
                    Создать заявку
                </Link>
            )}
            {/* <Link method="delete" className="btn btn-danger" href={route("flying.destroy", {flying: flying.id})}>Удалить</Link> */}
        </Layout>
    );
}
