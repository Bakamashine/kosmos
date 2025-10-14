import React from "react";
import Layout from "../Layout";
import { Table } from "react-bootstrap";
import { usePage } from "@inertiajs/react";
import { Order } from "../../interface";


export default function Admin() {
    const { props } = usePage();
    const order = props.order as Order[];
    console.log(order);
    return (
        <Layout>
            <h1 className="text-center">
                Добро пожаловать на административную страницу
            </h1>
            <div>
                <h3 className="text-center">Все заявки пользователей</h3>
                {order.length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Имя пользователя</th>
                                <th>Его ID</th>
                                <th>Текст заявки</th>
                                <th>Статус заявки</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map((item, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.user_name}</td>
                                    <td>{item.user_id}</td>
                                    <td>{item.text}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p className="text-center">Заявок нет</p>
                )}
            </div>
        </Layout>
    );
}
