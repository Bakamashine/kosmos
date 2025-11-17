import React from "react";
import Layout from "../Layout";
import FlyingForm from "../../forms/FlyingForm";
import { HttpMethod } from "../../helper/enum";
import { Head } from "@inertiajs/react";
import { route } from "ziggy-js";
export default function CreateFlying() {
    const title = "Создание полёта";
    return (
        <Layout title={title} title_h1>

            <FlyingForm
            method={HttpMethod.POST} url={route("flying.store")} />
        </Layout>
    );
}
