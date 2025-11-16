import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { FullUser, User } from "../../interface";
import Layout from "../Layout";
import NotFoundRecords from "../../components/ui/NotFoundRecords";
import { route } from "ziggy-js";

export default function ShowUser() {
    const { user } = usePage<{ user: FullUser }>().props;
    console.log("Full user: ", user);

    const title = `Пользователь: ${user.name}`;
    return (
        <Layout>
            <Head title={title} />
            <h1 className="text-center">{title}</h1>

            <div className="border p-3">
                <p>Имя: {user.name}</p>
                <p>Почта: {user.email}</p>
                <p>Роль: {user.role}</p>

                {user.status == 1 ? (
                    <p className="text-success">Активный</p>
                ) : (
                    <p className="text-danger">Заблокированный</p>
                )}

                {user.feedbacks && user.feedbacks.length > 0 ? (
                    <div className="mt-3">
                        <h4>Отзывы</h4>
                        {user.feedbacks.map((item, index) => (
                            <div key={index} className="border p-3 mt-3">
                                <p>
                                    Дата:{" "}
                                    {new Date(
                                        item.created_at
                                    ).toLocaleDateString()}
                                </p>
                                <p>Оценка: {item.score}</p>
                                <p>Отзыв: {item.text}</p>
                                <p>
                                    ID заявки:{" "}
                                    <Link
                                        href={route("order.show", {
                                            order: item.order_id,
                                        })}
                                    >
                                        {item.order_id}
                                    </Link>{" "}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <NotFoundRecords text="Отзывы не найдены" />
                )}

                {user.orders && user.orders.length > 0 ? (
                    <div className="mt-3">
                        <h4>Заявки</h4>
                        {user.orders.map((item, index) => (
                            <div key={index} className="mt-3 p-3 border">
                                <p>
                                    Дата:{" "}
                                    {new Date(item.date).toLocaleDateString()}
                                </p>
                                <p>Статус заявки: {item.status}</p>
                                <p>ID полёта: {" "}
                                    <Link href={route("flying.show", {flying: item.flying_id})}>{item.flying_id}</Link>
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <NotFoundRecords text="Заявки не найдены" />
                )}

                {user.otclice && user.otclice.length > 0 ? (
                    <div className="mt-3">
                        <h4>Отклики</h4>
                        {user.otclice.map((item, index) => (
                            <div key={index} className="p-3 border mt-3">
                                <p>
                                    Дата:{" "}
                                    {new Date(
                                        item.created_at
                                    ).toLocaleDateString()}
                                </p>
                                <p>Резюме: {item.description}</p>
                                <p>
                                    ID вакансии:{" "}
                                    <Link
                                        href={route("vacancy.show", {
                                            vacancy: item.vacancy_id,
                                        })}
                                    >
                                        {item.vacancy_id}
                                    </Link>
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <NotFoundRecords text="Отклики не найдены" />
                )}
            </div>

            {user.status == 0 ? (
                <Link
                    method="patch"
                    href={route("user.unban", { user: user.id })}
                    className="btn btn-success"
                >
                    Разблокировать пользователя
                </Link>
            ) : (
                <Link
                    method="patch"
                    href={route("user.ban", { user: user.id })}
                    className="btn btn-secondary"
                >
                    Заблокировать пользователя
                </Link>
            )}

            {/* <Link
                method="delete"
                href={route("user.destroy", { user: user.id })}
                className="btn btn-danger"
            >
                Удалить пользователя
            </Link> */}
        </Layout>
    );
}
