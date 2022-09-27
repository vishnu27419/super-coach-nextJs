import Layout from "../Layout/Layout";
import "../styles/globals.css";
import "../public/assets/modules/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
