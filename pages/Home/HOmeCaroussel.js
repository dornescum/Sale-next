import React from 'react';
// import './HOmeCaroussel.module.scss';
import {Jumbotron, Container, Row, Col, Carousel} from "react-bootstrap";
import classes from "./HOmeCaroussel.module.scss";
import Image from "next/image";
import cadastru from '../../public/img/sm/cadastru-1.webp';
import parcare from '../../public/img/parcare/parcare-1.webp';
import balcon from '../../public/img/sm/Balcon.webp';

const HOmeCaroussel = () => {

    return <Jumbotron fluid className={classes.carousel}>
        <Container>
            <Row>

                <Col lg="3" md="6" xs='12'>
                    <div className={classes.carouselleft}>
                        <p id="test" >
                            Toate ferestrele apartamentului sunt orientate spre curtea interioară, marginită la gard de nuci. Acest lucru il face răcoros si umbros vara. Aerul conditionat cu care este echipată casa a fost foarte rar folosit
                        </p>
                    </div>
                </Col>
                <Col lg="3" md="6"  xs="12">
                    <div  className={classes.foto}>
                        <Image src={cadastru} alt='cadastru-acte' width={350} height={350} layout='responsive' />
                    </div>
                </Col>
                 <Col lg="3" md="6"  xs="12">
                    <div  className={classes.foto}>
                        <Image src={parcare} alt='cadastru-acte' width={350} height={350} layout='responsive'/>
                    </div>
                </Col>
                 <Col lg="3" md="6"  xs="12">
                    <div  className={classes.foto}>
                        <Image src={balcon} alt='cadastru-acte'  width={350} height={350} layout='responsive'/>
                    </div>
                </Col>

            </Row>


        </Container>
    </Jumbotron>
};

export default HOmeCaroussel;
