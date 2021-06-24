import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import path from "path";
import fs from "fs";
import BalconInfo from "./BalconInfo";
import {Card, CardGroup} from "react-bootstrap";
import Image from "next/image";

// export const getStaticProps = async () => {
//     const filePath = path.join(process.cwd(), 'data', 'max-data.json')
//     const jsonData = await fs.readFileSync(filePath);
//     const data = JSON.parse(jsonData);
//     return {
//         props: {
//             rooms: data.rooms
//         }
//     };
// }



const Balcon = (props) => {
    const {rooms} = props;
    const filteredData = rooms.filter((item) => {
        return item.name === "Balcon"
    })
    return <ContentWrapper>
        <BalconInfo />
        <CardGroup className="home-card">
            {filteredData.map((item) => {
                const {id, img, title, desc} = item;
                return <div className="col-lg-6 col-sm-6 py-1" key={id}>
                    <Card className="home-card-item">
                        {/*<Card.Img variant="top"*/}
                        {/*          src={img} className='img-general'*/}
                        {/*/>*/}
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
export default Balcon;
