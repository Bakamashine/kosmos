import React from "react";
import Layout from "../Layout";
import { Head, Link, usePage } from "@inertiajs/react";
import { Table } from "react-bootstrap";
import { route } from "ziggy-js";
import { Ruble } from "../../constants/Ruble";
import NotFoundRecords from "../../components/ui/NotFoundRecords";
import Paginate from "../../components/ui/Paginate";
import { UserPag } from "../../interface";
export default function ManagementUser() {
    const users = usePage().props.user as UserPag;
    // console.log("Management users: ", users);
    const title = "Управление пользователями";
    return (
        <Layout title={title} title_h1>

            {users !== undefined ? (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.data.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <Link
                                            href={route("user.show", {
                                                user: item.id,
                                            })}
                                        >
                                            {item.id}
                                        </Link>
                                    </td>
                                    <td>
                                        {item.name}
                                        <br />
                                        <Link
                                            href={route("user.edit", {
                                                user: item.id,
                                            })}
                                        >
                                            Редактирование
                                        </Link>
                                        <br />
                                        <Link
                                            method="delete"
                                            href={route("user.destroy", {
                                                user: item.id,
                                            })}
                                            className="text-danger"
                                        >
                                            Удаление
                                        </Link>
                                        <br />
                                        {item.status == 1 ? (
                                            <Link
                                                method="patch"
                                                href={route("user.ban", {
                                                    user: item.id,
                                                })}
                                                className="text-secondary"
                                            >
                                                Блокирование
                                            </Link>
                                        ) : (
                                            <Link
                                                method="patch"
                                                href={route("user.unban", {
                                                    user: item.id,
                                                })}
                                                className="text-success"
                                            >
                                                Разблокировать
                                            </Link>
                                        )}
                                    </td>
                                    <td>{item.email}</td>
                                    <td>
                                        {item.status == 1 ? (
                                            <p className="text-success">
                                                Активный
                                            </p>
                                        ) : (
                                            <p className="text-danger">
                                                Заблокированный
                                            </p>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-center">
                        <Paginate item={users} />
                    </div>
                </div>
            ) : (
                <NotFoundRecords text="Полёты не найдены" />
            )}
            <Link className="btn btn-dark" href={route("user.create")}>
                Создать пользователя
            </Link>
        </Layout>
    );
}
