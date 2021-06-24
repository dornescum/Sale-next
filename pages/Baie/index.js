import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import BaieInfo from "./BaieInfo";


export const getStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const res = await fetch('data/test.json');
    const data = await res.json();
    console.log(data)
    return {
        props :{
            test: data
        }
    }
}



const Baie = (props) => {
    const {test} = props;
    return <ContentWrapper>
        <BaieInfo/>
        {/*<BaieCard/>*/}
        {test.map((item)=>{
            return <p key={item.id}>{item.title}</p>
        })}
    </ContentWrapper>
}
export default Baie;
