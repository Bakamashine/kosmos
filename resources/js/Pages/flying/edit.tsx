import { Head, Link, usePage } from "@inertiajs/react";
import Layout from "../Layout";
import React from "react";
import { Flying } from "../../interface";
import FlyingForm from "../../forms/FlyingForm";
import { HttpMethod } from "../../helper/enum";
import { route } from "ziggy-js";

export default function EditFlying() {
    const flying = usePage().props.flying as Flying;
    // console.log(flying)
    return (
        <Layout title={flying.title} title_h1>

            <FlyingForm
                description={flying.description}
                price={flying.price}
                title={flying.title}
                textbutton="Редактировать полёт"
                method={HttpMethod.PUT}
                url={route("flying.update", { flying: flying.id })}
            />
        </Layout>
    );
}
