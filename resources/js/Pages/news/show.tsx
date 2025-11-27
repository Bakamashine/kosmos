import { Head, Link, usePage } from "@inertiajs/react";
import { News, NewsPag, User } from "../../interface";
import Layout from "../Layout";

export default function ShowNews() {
    const {props} = usePage<{auth: {user: User}; news: News}>();
    const news = props.news;
    const user = props.auth.user;


    return (
        <Layout title={news.title}>
            <div className="text-center">
                <h1>{news.title}</h1>
                <p>{news.description}</p>
                <div>
                    <Link className="" href={"/"}>
                        Назад
                    </Link>
                </div>

                {user && user.role_name === "admin" && (
                    <div>
                        <Link className="" href={"/news"}>
                            К новостям (админ)
                        </Link>
                    </div>
                )}
            </div>
        </Layout>
    );
}
