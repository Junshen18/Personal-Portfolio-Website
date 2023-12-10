import React from "react";
import Navbar from "./Navbar";
import { Inter } from "next/font/google";


const inter = Inter({ weight: ['600'], subsets: ['latin'] })

const Layout = ({ children }) => {
    return(
        <div className={`min-h-screen mx-auto ${inter.className}`}>
            <Navbar />
            <main className=" pl-6 pr-6  md:pl-12 md:pr-12 lg:pr-12 lg:pl-12">{children}</main>
        </div>
    );
}

export default Layout;