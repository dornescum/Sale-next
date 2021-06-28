import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import BaieInfo from "./BaieInfo";
import path from "path";
import fs from "fs";
import {Card, CardGroup} from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";


export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'data', 'max-data.json')
    const jsonData = await fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return {
        props: {
            rooms: data.rooms
        }
    };
}

const Baie = (props) => {
    const {rooms} = props;
    const filteredData = rooms.filter((item) => {
        return item.name === "Baie"
    })
    return <ContentWrapper>
        <Head>
            <title>Next App Baie</title>
            <meta name="description"
                  content="Junior Front end developer, Javascript, Html5, Css3, Sccs, React js, Vue js"/>
            <meta name="keywords" content="Next js"/>
            <meta name="author" content="Mihai Dornescu"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <BaieInfo/>
        <CardGroup className="home-card">
            {filteredData.map((item) => {
                const {id, img, title, desc} = item;
                return <div className="col-lg-6 col-sm-6 py-1" key={id}>
                    <Card className="home-card-item">
                        <Image src={img} width={650} height={650} alt={title}/>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {desc}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            })}
        </CardGroup>
    </ContentWrapper>
}
export default Baie;
