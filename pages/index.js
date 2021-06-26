import Head from 'next/head';
import Image from 'next/image';
// import TheNavbar from "../components/TheNavbar";
import HomeInfo from "./Home/HomeInfo";
import HOmeCaroussel from "./Home/HOmeCaroussel";
import HomeCrad from "./Home/HomeCrad";
import HomeConditional from "./Home/HomeConditional";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";

import classes from '../styles/Home.module.scss';
import style from '../pages/Home/HOmeCaroussel.module.scss';


export default function Home() {
    return (
        <ContentWrapper className={classes.home}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {/*<TheNavbar />*/}
            <main className={classes.main}>
                <HomeInfo/>
                <HOmeCaroussel/>
                <HomeCrad/>
                <HomeConditional />

            </main>


        </ContentWrapper>
    )
}
{/*<footer className={classes.footer}>*/
}
{/*  <a*/
}
{/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/
}
{/*    target="_blank"*/
}
{/*    rel="noopener noreferrer"*/
}
{/*  >*/
}
{/*    Powered by{' '}*/
}
{/*    <span className={classes.logo}>*/
}
{/*      <Image src="/img/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/
}
{/*    </span>*/
}
{/*  </a>*/
}
{/*</footer>*/
}
