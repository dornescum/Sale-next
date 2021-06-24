import InfoCard from "../../components/InfoCard/InfoCard"


const BalconInfo =()=>{
    let title = 'Balcon'
    let desc ='Tip logie, inchis cu geam termopan va oferă un spatiu ideal pt servit cafeaua, uscat rufe sau depozitare.'
    return <InfoCard>
        <h1>{title}</h1>
        <p className='info-card'>{desc}</p>
    </InfoCard>
}
export default BalconInfo;
