import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
//solo se puede devolver un elemento en return
// en el return usar div o <></> aunque el div casi no se usa
const Layout = ({ children }) => {
    return (
        <div className="mainContainer">
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}

export default Layout;

