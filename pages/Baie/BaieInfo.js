import InfoCard from "../../components/InfoCard/InfoCard"


const BaieInfo = () => {
    let title = 'Baie'
    let desc = 'Spatioasă si functională, cu masină de spălat nouă Whirpoll si baterii Hansgrohe.\n' +
        'In fața baii exista un mic dressing cu rafturi pt pantofi si spații pt masa de călcat, fier de calcăt, aspirator.\n'
    return <InfoCard>
        <h1>{title}</h1>
        <p className='info-card'>{desc}</p>
    </InfoCard>
}
export default BaieInfo;
