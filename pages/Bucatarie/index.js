import fs from 'fs';
import path from 'path';
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import BucatarieInfo from "./BucatarieInfo";
import {Card, CardGroup} from "react-bootstrap";

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

const Bucatarie = (props) => {
    const {rooms} = props;
    const filteredData = rooms.filter((item) => {
        return item.name === "Bucatarie"
    })
    return <ContentWrapper>
        <BucatarieInfo/>

        <CardGroup className="home-card">
            {filteredData.map((item) => {
                console.log(item)
                const {id, img, title, desc} = item;
                return <div className="col-lg-6 col-sm-6 py-1" key={id}>
                    <Card className="home-card-item">
                        <Card.Img variant="top"
                                  src={img} className='img-general'
                        />
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
export default Bucatarie;
{/*{rooms.map((item) => {*/
}
{/*    return <p key={item.id}>{item.title}</p>*/
}
{/*})}*/
}
{/*{filteredData.map((item) => {*/
}
{/*    return <p key={item.id}>{item.title}</p>*/
}
{/*})}*/
}
