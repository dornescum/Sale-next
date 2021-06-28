import React from 'react';
import InfoCard from "../../components/InfoCard/InfoCard"

const LivingInfo = () => {
    let title = 'Camera de zi'
    let desc = 'Complet mobilat si echipat, open space cu bucataria.'
    return <InfoCard>
        <h1 >{title}</h1>
        <p className='info-card'>{desc}</p>
    </InfoCard>
};

export default LivingInfo;
