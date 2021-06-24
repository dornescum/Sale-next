import InfoCard from "../../components/InfoCard/InfoCard"

const DormitorInfo =()=>{
    let title = 'Dormitor'
    let desc ='Cu dresing spațios si pat de mijloc, toată mobila a fost facută la comandă sau este de proveniența IKEA.\n'
    return <InfoCard>
        <h1>{title}</h1>
        <p className='info-card'>{desc}</p>
    </InfoCard>
}
export default DormitorInfo;
