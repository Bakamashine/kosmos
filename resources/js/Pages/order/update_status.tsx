import { Update } from "vite";
import { Order } from "../../interface";
import { Button, Form, Table } from "react-bootstrap";
import { useForm, usePage } from "@inertiajs/react";
import { FormEvent } from "react";
import { route } from "ziggy-js";

export default function UpdateOrder() {
    const { props } = usePage();
    const orders = props.order as Order[];
    const orders_status = props.order_status as string[];
console.log("orders: ", orders)

    const { data, setData, patch, errors } = useForm({
        status: "0",
    });

    function submit(e: FormEvent<HTMLFormElement>, id: number) {
        e.preventDefault();
        patch(route("order.update", { order: id }));
    }
    return (
        <>
            <h3 className="text-center">Все заявки пользователей</h3>
            {orders.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Имя пользователя</th>
                            <th>ID пользователя</th>
                            <th>Желаемая дата</th>
                            <th>Цена полёта</th>
                            <th>Название полёта</th>
                            <th>Статус заявки</th>
                            <th>-</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.user_name}</td>
                                <td>{item.user_id}</td>
                                <td>{item.date}</td>
                                <td>{item.flying_price}</td>
                                <td>{item.flying_title}</td>
                                <td>{item.status}</td>
                                <td>
                                    <Form onSubmit={(e) => submit(e, item.id)}>
                                        <Form.Select
                                            aria-label="Default select example"
                                            onChange={(data) =>
                                                setData(
                                                    "status",
                                                    data.target.value
                                                )
                                            }
                                        >
                                            {orders_status.map(
                                                (item, index) => (
                                                    <option key={index}>
                                                        {item}
                                                    </option>
                                                )
                                            )}
                                        </Form.Select>
                                        <div className="mt-2">
                                            <Button
                                                type={"submit"}
                                                className="btn btn-dark"
                                            >
                                                Смена статуса
                                            </Button>
                                        </div>
                                    </Form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p className="text-center">Заявок нет</p>
            )}
        </>
    );
}
