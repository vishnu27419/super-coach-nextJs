import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="super-coach-container">
      <Head>
        <title>Super Coach</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
