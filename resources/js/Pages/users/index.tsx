import React from "react";
import Layout from "../Layout";
import { Head, Link, usePage } from "@inertiajs/react";
import { Table } from "react-bootstrap";
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
                                            href={`/user/${item.id}`}
                                        >
                                            {item.id}
                                        </Link>
                                    </td>
                                    <td>
                                        {item.name}
                                        <br />
                                        <Link
                                            href={`/user/${item.id}/edit`}
                                        >
                                            Редактирование
                                        </Link>
                                        <br />
                                        <Link
                                            preserveScroll
                                            method="delete"
                                            href={`/user/${item.id}`}
                                            className="text-danger"
                                        >
                                            Удаление
                                        </Link>
                                        <br />
                                        {item.status == 1 ? (
                                            <Link
                                                preserveScroll
                                                method="patch"
                                                href={`/user/${item.id}/ban`}
                                                className="text-secondary"
                                            >
                                                Блокирование
                                            </Link>
                                        ) : (
                                            <Link
                                                preserveScroll
                                                method="patch"
                                                href={`/user/${item.id}/unban`}
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
            <Link className="btn btn-dark" href={"/user/create"}>
                Создать пользователя
            </Link>
        </Layout>
    );
}
