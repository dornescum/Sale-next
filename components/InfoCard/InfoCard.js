import {Jumbotron, Container} from "react-bootstrap";

const InfoCard =(props)=>{
    return  <Jumbotron fluid>
        <Container>
            {props.children}
        </Container>
    </Jumbotron>
}
export default InfoCard;
