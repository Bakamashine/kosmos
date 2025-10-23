import React from "react";
import Layout from "./Layout";
import { Carousel } from "react-bootstrap";
import UncontrolledCarousel from "../components/Carousel";
import { Head } from "@inertiajs/react";
export default function Main() {
    return (
        <Layout>
            <Head title="Главная" />
            <h1 className="text-center p-2">Главная страница</h1>
            <div className="m-3">
                <UncontrolledCarousel />
            </div>
        </Layout>
    )
}
