import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { FlyingPag } from "../../interface";
import Layout from "../Layout";
import { Table } from "react-bootstrap";
import NotFoundRecords from "../../components/ui/NotFoundRecords";
import Paginate from "../../components/ui/Paginate";
import { route } from "ziggy-js";
import { Ruble } from "../../constants/Ruble";
import FlyingCard from "../../components/FlyingCard";

export default function FlyingUserView() {
    const flying = usePage().props.flying as FlyingPag;
    const title = "Управление полётами";
    // console.log(flying);
    return (
        <Layout title={title} title_h1>
            {flying !== undefined && flying.data.length > 0 ? (
                <>
                    <div className="news">
                        {flying.data.map((item) => (
                            <FlyingCard
                                key={item.id}
                                id={item.id}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                title={item.title}
                            />
                        ))}
                    </div>
                    <div className="d-flex justify-content-center">
                        <Paginate item={flying} />
                    </div>
                </>
            ) : (
                <NotFoundRecords text="Полёты не найдены" />
            )}
        </Layout>
    );
}
