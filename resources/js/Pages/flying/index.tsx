import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { FlyingPag } from "../../interface";
import Layout from "../Layout";
import { Table } from "react-bootstrap";
import NotFoundRecords from "../../components/NotFoundRecords";
import Paginate from "../../components/Paginate";
import { route } from "ziggy-js";

export default function ManagementFlying() {
    const flying = usePage().props.flying as FlyingPag;
    const title = "Управление полётами";
    console.log(flying);
    return (
        <Layout>
            <Head title={title}></Head>
            <h1 className="text-center">{title}</h1>

            {flying !== undefined ? (
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
                                        <Link href={route("flying.edit", {flying: item.id})}>Redact</Link>
                                    </td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
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
            <Link className="btn btn-dark" href={route("flying.create")}>Создать полёт</Link>
        </Layout>
    );
}
