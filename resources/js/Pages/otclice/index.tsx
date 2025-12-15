import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { IOtclice, IOtclicePag, IOtclicePagCollection } from "../../interface";
import Layout from "../Layout";
import { Table } from "react-bootstrap";
import Paginate from "../../components/ui/Paginate";
import { route } from "ziggy-js";
import NotFoundRecords from "../../components/ui/NotFoundRecords";
import PaginateCollection from "../../components/ui/PaginateCollection";

export default function Otclice() {
    const { otclice } = usePage<{ otclice: IOtclicePagCollection }>().props;

    const title = "Отклики";
    // console.log(otclice);
    return (
        <Layout title={title} title_h1>
            <div>
                {otclice.data.length > 0 ? (
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User name</th>
                                    <th>Vacancy ID</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {otclice.data.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <Link
                                                preserveScroll
                                                method="delete"
                                                className="text-danger"
                                                href={`/otclice/${item.id}`}
                                            >
                                                {item.id}
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                href={`/user/${item.user_id}`}
                                            >
                                                {item.user_name}
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                href={route("vacancy.show", {
                                                    vacancy: item.vacancy_id,
                                                })}
                                            >
                                                {item.vacancy_name}
                                            </Link>
                                        </td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <div className="d-flex justify-content-center">
                            <PaginateCollection item={otclice} />
                        </div>
                    </div>
                ) : (
                    <NotFoundRecords text="Отлики не найдены" />
                )}
            </div>
        </Layout>
    );
}
