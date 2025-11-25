import { Update } from "vite";
import { Order, OrderPag, OrderPagUniqual } from "../../interface";
import { Button, Form, Table } from "react-bootstrap";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEvent } from "react";
import { route } from "ziggy-js";
import Paginate from "../ui/Paginate";
import PaginateOrder from "../ui/PaginateOrder";

export default function UpdateOrder() {
    const { props } = usePage();
    const orders = props.order as OrderPagUniqual;
    const orders_status = props.order_status as string[];
    // console.log("orders: ", orders);

    const { data, setData, patch, errors } = useForm({
        status: "0",
    });

    function submit(e: FormEvent<HTMLFormElement>, id: number) {
        e.preventDefault();
        patch(route("order.update", { order: id }), {preserveScroll: true});
    }
    return (
        <>
            <h3 className="text-center">Все заявки пользователей</h3>
            {orders.data.length > 0 ? (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                {/* <th>Имя пользователя</th> */}
                                <th>Имя пользователя</th>
                                <th>Желаемая дата</th>
                                <th>Цена полёта</th>
                                <th>Название полёта</th>
                                <th>Статус заявки</th>
                                <th>-</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.data.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <Link
                                            preserveScroll
                                            href={route("order.destroy", {
                                                order: item.id,
                                            })}
                                            method="delete"
                                            className="text-danger"
                                        >
                                            {item.id}
                                        </Link>
                                    </td>
                                    {/* <td>{item.user_name}</td> */}
                                    {/* <td>{item.user_id}</td> */}
                                    <td>
                                        <Link
                                            href={route("user.show", {
                                                user: item.user_id,
                                            })}
                                        >
                                            {item.user_name}
                                        </Link>{" "}
                                    </td>
                                    <td>{item.date}</td>
                                    <td>{item.flying_price}</td>
                                    <td>{item.flying_title}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <Form
                                            onSubmit={(e) => submit(e, item.id)}
                                        >
                                            <Form.Select
                                                aria-label="Default select example"
                                                onChange={(data) =>
                                                    setData(
                                                        "status",
                                                        data.target.value
                                                    )
                                                }
                                                defaultValue={item.status}
                                                // value={data.status}
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
                    {orders.meta.total > 5 && (
                        <div className="d-flex justify-content-center">
                            <PaginateOrder item={orders}  />
                        </div>
                    )}
                </div>
            ) : (
                <p className="text-center">Заявок нет</p>
            )}
        </>
    );
}
