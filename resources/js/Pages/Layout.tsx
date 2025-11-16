import React, { ReactNode } from "react";
import Header from "../includes/header";
import { Link, router, usePage } from "@inertiajs/react";
import { Breadcrumb } from "react-bootstrap";
import { BreadCrumps } from "../interface";
import { route } from "ziggy-js";

const Layout = ({ children }: { children: ReactNode }) => {
    const { breadcrumbs } = usePage<{ breadcrumbs: BreadCrumps[] }>().props;
    // console.log("BreadCrumps: ", breadcrumbs);
    return (
        <>
            <header>
                <Header />
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <Breadcrumb className="breadcrumps">
                        {breadcrumbs.map((item, index) => (
                            <Breadcrumb.Item
                                key={index}
                                onClick={() => {
                                    router.visit(item.url);
                                }}
                            >
                                {item.title}
                            </Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                )}
            </header>
            <main>
                <section className="main__wrapper">{children}</section>
            </main>
        </>
    );
};

export default Layout;
