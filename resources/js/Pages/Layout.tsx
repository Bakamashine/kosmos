import React, { ReactNode } from "react";
import Header from "./includes/header";

export interface User {
    name: string;
    role_name: string;
    email: string;
}

const Layout = ({ children }: { children: ReactNode }) => (
    <>
        <header>
            <Header />
        </header>
        <body>
            <main>
                <section className="main__wrapper">
                {children}
                </section>
                </main>
        </body>
    </>
);

export default Layout;
