import { Head, Link, usePage } from "@inertiajs/react"
import React from "react"
import { Vacancy } from "../../interface";
import Layout from "../Layout";
import { route } from "ziggy-js";

export default function ShowVacancy() {
    const {vacancy} = usePage<{vacancy: Vacancy}>().props;
console.log(vacancy)

    const title = `Вакансия: ${vacancy.title}`
    return (
        <Layout title={title} title_h1>

            <div className="p-3 border">
                <p>Название: {vacancy.title}</p>
                <p>Описание: {vacancy.description}</p>
                <p>Зарплата: {vacancy.payment}</p>
                <div className="p-3 border">
                    <p>Изображение: </p>
                    <img src={vacancy.image} className="img-thumnail" />
                </div>
            </div>

            <Link className="btn btn-dark" href={route("vacancy.edit", {vacancy: vacancy.id})}>Редактировать</Link>
            {/* <Link method="delete" className="btn btn-danger" href={route("vacancy.destroy", {vacancy: vacancy.id})}>Удалить (в корзину)</Link> */}
        </Layout>
    )
}
