import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";


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

function Balcon ({test}){
    return <>
        {test.map((item)=>{
            return <p key={item.id}>{item.title}</p>
        })}
    </>

}
export default Balcon;
