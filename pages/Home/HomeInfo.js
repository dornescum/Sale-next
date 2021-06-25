import React from 'react';
// import InfoCard from "../../components/InfoCard/InfoCard";
import {Jumbotron, Container, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import eva from '../../data/data-img/Eva.webp';
// import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import classes from "./HomeInfo.module.scss";
import Image from "next/image";




const HomeInfo = (props) => {
    const Eva = require('../../public/img/sm/Eva.webp');
    console.log(Eva)
    return <Jumbotron fluid className={classes.info}>
        <Container>
            <Row>
                <Col lg="4" md="6" sm="3" xs="4">
                    <div className={classes.puppy}>
                        {/*Fixme nu merge hover*/}
                        <OverlayTrigger overlay={<Tooltip id="tooltip">Eu sunt Eva!</Tooltip>}>
                            <Image
                                src={Eva} alt={eva}
                                />
                        </OverlayTrigger>
                    </div>
                </Col>
                <Col lg="8" md="6" sm="9" xs="8">
                    <h1 className="home-title">Apartamentul de langa nuci</h1>
                    <div className="home-presentation">
                        <p id="para">
                            Are 2 camere si este situat intr un bloc construit in 2011, situat intr o zonă linistită din
                            Sectorul 3, cu multiple puncte de interes precum scoli, gradinite, supermarketuri si
                            mijloace de transport in comun in apropire. Stația de metrou 1 Decembrie este la distanta de
                            maxim 10 min de mers pe jos, 900 . Apartamentul este amenajat modern, complet echipat,
                            inclusive centrala termica proprie, fiind contorizat independent la toate utilitatile.

                        </p>
                    </div>
                </Col>
            </Row>
            {/*<div className="home-presentation">*/}
            {/*    <p id="para-mobile">*/}
            {/*        Are 2 camere si este situat intr un bloc construit in 2011, situat intr o zonă linistită din*/}
            {/*        Sectorul 3, cu multiple puncte de interes precum scoli, gradinite, supermarketuri si mijloace de*/}
            {/*        transport in comun in apropire, Statia de metrou 1 Decembrie este la distanta de maxim 10 min de*/}
            {/*        mers pe jos, 900 m. Apartamentul este amenajat modern, complet echipat, inclusive centrala termica*/}
            {/*        proprie, fiind contorizat independent la toate utilitatile.*/}
            {/*    </p>*/}
            {/*</div>*/}

        </Container>
    </Jumbotron>
};

export default HomeInfo;