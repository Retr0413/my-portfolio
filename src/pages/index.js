import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Frontpage from "@/components/Frontpage";

import Head from 'next/head';

const Home = () => {
    return (
        <>
        <Head>
            <title>HA-Defalt Portfolio</title>
            <meta name="description" content="有馬勇人のポートフォリオ" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.jpeg" />
        </Head>
        <div id="frontpage"><Frontpage /></div>
        <div><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
        </>
    )
}

export default Home;