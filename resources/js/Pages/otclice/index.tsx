import { Head, usePage } from "@inertiajs/react";
import React from "react";
import { IOtclice, IOtclicePag } from "../../interface";
import Layout from "../Layout";
import { Table } from "react-bootstrap";
import Paginate from "../../components/ui/Paginate";

export default function Otclice() {
    const { otclice } = usePage<{ otclice: IOtclicePag }>().props;

    const title = "Отклики";
    return (
        <Layout>
            <Head title={title} />
            <h1 className="text-center"></h1>

            <div>
                {otclice.data.length > 0 && (
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User ID</th>
                                    <th>Vacancy ID</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {otclice.data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.user_id}</td>
                                        <td>{item.vacancy_id}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <div className="d-flex justify-content-center">
                            <Paginate item={otclice} />
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
