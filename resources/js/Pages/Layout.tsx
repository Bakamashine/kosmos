import React, { ReactNode } from "react";
import Header from "../includes/header";


const Layout = ({ children }: { children: ReactNode }) => (
    <>
        <header>
            <Header />
        </header>
        <main>
            <section className="main__wrapper">{children}</section>
        </main>
    </>
);

export default Layout;
