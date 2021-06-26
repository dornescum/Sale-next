import React from 'react';
import {CardGroup, Card, Button} from "react-bootstrap";

const HomeCrad = () => {
    const roomCard = [
        {
            title: 'Camera de zi',
            desc: 'Complet mobilată si echipată, open space cu bucataria.',
            img: '/img/sm/Living-sm.webp',
            path: './living',
            id: 1
        },
        {
            title: 'Dormitor',
            desc: 'Cu dresing spațios si pat de mijloc, toată mobila a fost facuta la comandă sau este de provenienta IKEA.',
            img: '/img/sm/Dormitor-sm.webp',
            path: './dormitor',
            id: 2
        },
        {
            title: 'Bucatarie',
            desc: 'Mobilată, complet echipată',
            img: '/img/sm/Buc-sm.webp',
            path: './bucatarie',
            id: 3
        },
        {
            title: 'Baie',
            desc: 'Spațioasă si functională, cu masina de spălat noua Whirpoll si baterii Hansgrohe.',
            img: '/img/sm/Baie3.webp',
            path: './baie',
            id: 4
        },
    ]
    return (
        <CardGroup className="home-card">
            {roomCard.map((item) => {
                const {id, img, title, desc, path} = item;
                return <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6"  key={id}>
                    <Card className="home-card-item">
                        <Card.Img variant="top"
                                  src={img} className='img-card-main'
                        />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {desc}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="btn-main" href={path}>{title}</Button>
                        </Card.Footer>
                    </Card>
                </div>
            })}
        </CardGroup>
    );
};

export default HomeCrad;
