import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { FlyingPag } from "../../interface";
import Layout from "../Layout";
import { Table } from "react-bootstrap";
import NotFoundRecords from "../../components/ui/NotFoundRecords";
import Paginate from "../../components/ui/Paginate";
import { route } from "ziggy-js";
import { Ruble } from "../../constants/Ruble";

export default function ManagementFlying() {
    const flying = usePage().props.flying as FlyingPag;
    const title = "Управление полётами";
    // console.log(flying);
    return (
        <Layout title={title} title_h1>
            {flying !== undefined && flying.data.length > 0 ? (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {flying.data.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <Link href={`/flying/${item.id}`}>
                                            {item.id}
                                        </Link>
                                    </td>
                                    <td>
                                        {item.title}
                                        <br />
                                        <Link
                                            href={route("flying.edit", {
                                                flying: item.id,
                                            })}
                                        >
                                            Редактирование
                                        </Link>
                                        <br />
                                        <Link
                                            preserveScroll
                                            method="delete"
                                            className="text-danger"
                                            href={route("flying.destroy", {
                                                flying: item.id,
                                            })}
                                        >
                                            Удаление
                                        </Link>
                                    </td>
                                    <td>{item.description}</td>
                                    <td>
                                        {item.price} {Ruble}
                                    </td>
                                    <td>
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                width={100}
                                                height={100}
                                            />
                                        ) : (
                                            <p>-</p>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-center">
                        <Paginate item={flying} />
                    </div>
                </div>
            ) : (
                <NotFoundRecords text="Полёты не найдены" />
            )}
            <Link className="btn btn-dark" href={route("flying.create")}>
                Создать полёт
            </Link>
        </Layout>
    );
}
