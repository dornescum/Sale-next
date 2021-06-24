import Layout from "../components/Layout/Layout";

import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';

// import '../styles/module/navbar.module.scss';


function MyApp({Component, pageProps}) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

export default MyApp
