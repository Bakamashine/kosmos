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
        <Layout>
            <Head title={title}></Head>
            <h1 className="text-center">{title}</h1>

            {flying !== undefined && flying.data.length > 0 ? (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {flying.data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
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
                                            method="delete"
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
