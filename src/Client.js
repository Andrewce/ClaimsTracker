import React, { useState } from 'react'
import ClientClaimData from './ClientClaimData'



const Client = () => {
    const [claims, setClaim] = useState([
        { claimNumber: "10", claimDate: "1/1/2020", clientClaimNumner: "c1", id: 1 },
        { claimNumber: "20", claimDate: "2/1/2020", clientClaimNumner: "c2", id: 2 },
        { claimNumber: "30", claimDate: "3/1/2020", clientClaimNumner: "c3", id: 3 },
        { claimNumber: "40", claimDate: "4/1/2020", clientClaimNumner: "c4", id: 4 },
    ])
    const addClaim = () => {
        setClaim([...claims, { claimNumber: "50", claimDate: "5/1/2020", clientClaimNumner: "c5", id: 5 }])
    }

    return (
        <div className="container">
            <ClientClaimData ClaimsObj={claims} />

            {claims.map(claim => {
                return (
                    <li key={claim.id} > {claim.claimNumber},{claim.claimDate},{claim.clientClaimNumner} </li>
                );
            })}
            <button onClick={addClaim} > Add Claim </button>

        </div>


    )
}

export default Client;
