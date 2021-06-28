import Head from 'next/head';
import HomeInfo from "./Home/HomeInfo";
import HOmeCaroussel from "./Home/HOmeCaroussel";
import HomeCrad from "./Home/HomeCrad";
import HomeConditional from "./Home/HomeConditional";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import classes from '../styles/Home.module.scss';


export default function Home() {
    return (
        <ContentWrapper className={classes.home}>
            <Head>
                <title>Next App Sale</title>
                <meta name="description"
                      content="Junior Front end developer, Javascript, Html5, Css3, Sccs, React js, Vue js"/>
                <meta name="keywords" content="Next js"/>
                <meta name="author" content="Mihai Dornescu"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={classes.main}>
                <HomeInfo/>
                <HOmeCaroussel/>
                <HomeCrad/>
                <HomeConditional/>
            </main>
        </ContentWrapper>
    )
}
