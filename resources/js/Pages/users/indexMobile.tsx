import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { FormEvent } from "react";
import { UserPag } from "../../interface";
import Layout from "../Layout";
import { Card, Form } from "react-bootstrap";
import Paginate from "../../components/ui/Paginate";
export default function UserManagementMobile() {
    const { props } = usePage();
    const users = props.user as UserPag;
    const { data, setData, patch, errors } = useForm({
        status: "0",
    });
    console.log(users);

    function submit(e: FormEvent<HTMLFormElement>, id: number) {
        e.preventDefault();
        patch(`/user/${id}`)
    }
    const title = "Редактирование пользователей";
    return (
        <Layout title={title} title_h1>
            <div className="news">
                {users.data.map((item, index) => (
                    <Card key={index} style={{ width: "19rem" }}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.email}</Card.Text>
                            <Card.Text>{item.status}</Card.Text>
                            <Card.Footer>
                                <Link
                                href={`/user/${item.id}/edit`}
                                >
                                    Редактирование
                                </Link>
                                <br />
                                <Link
                                    preserveScroll
                                    method="delete"
                                    className="text-danger"
                                    href={`/user/${item.id}`}
                                >
                                    Удаление
                                </Link>
                                <br />
                                {item.status == 1 ? (
                                    <Link
                                        method="patch"
                                        className="text-secondary"
                                        href={`/user/${item.id}/ban`}
                                    >
                                        Блокировние
                                    </Link>
                                ) : (
                                    <Link
                                        method="patch"
                                        href={`/user/${item.id}/unban`}
                                    >
                                        Разблокировать
                                    </Link>
                                )}
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            {users.total > 5 && (
                <div className="d-flex justify-content-center">
                    <Paginate item={users} />
                </div>
            )}
        </Layout>
    );
}
