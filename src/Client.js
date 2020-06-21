import React, { useState } from 'react'
import ClientClaimData from './ClientClaimData'
import Tmwdata from './Tmwdata';

const Client = () => {
    const [claims, setClaims] = useState([
        { claimNumber: "10", claimDate: "2020-01-01", clientClaimNumner: "c1", id: 1 },
        { claimNumber: "20", claimDate: "2020-02-01", clientClaimNumner: "c2", id: 2 },
        { claimNumber: "30", claimDate: "2020-03-01", clientClaimNumner: "c3", id: 3 },
        { claimNumber: "40", claimDate: "2020-04-01", clientClaimNumner: "c4", id: 4 },
    ])
    const [searchClaim, setSearchClaim] = useState("10");

    let [filteredClaims, setFilteredClaims] = useState([])

    let filterClaims = () => {
        filteredClaims = claims.filter(c => {
            return c.claimNumber === searchClaim
        })

        setFilteredClaims(filteredClaims)
    }

    let saveClaim = (id, claimNumber, claimDate, clNumber) => {

        for (let i = 0; i < claims.length; i++) {
            if (claims[i].id === id) {
                claims[i].claimNumber = claimNumber
                claims[i].claimDate = claimDate
                claims[i].clientClaimNumner = clNumber
                console.log("new save claims", claims)
                break;
            }
        }
        setClaims(claims)
    }


    return (
        <div className="container">
            <div className="row align-right">
                <label className="justify-content-center col-md-2">
                    Search Claim        </label>
                <input type="text" className="col-md-2" value={searchClaim} onChange={(e) => setSearchClaim(e.target.value)} name="searchClaim" />
                <button onClick={filterClaims}>Search Claim</button>
            </div>

            {filteredClaims.map(claim => {
                return (
                    <div key={claim.claimNumber}>
                        <ClientClaimData id={claim.id} number={claim.claimNumber} date={claim.claimDate} clNumber={claim.clientClaimNumner} saveClaim={saveClaim} />
                        <Tmwdata />
                    </div>
                );
            })}
        </div>
    )
}

export default Client;
