import {useEffect} from "react";
import Head from "next/head";
import Header from "../components/Header";
import '../styles/global.scss'
import "../styles/media-queries.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {
    useEffect(() => {
        AOS.init({
            duration: 1300,
        });
    }, [])

    return (
        <>
            <Head>
                <title>Tevin Aggrey</title>
                <meta name="description" content="A fullstack software developer"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer />
        </>
)
}

export default MyApp
