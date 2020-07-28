import React, { useState } from 'react'
import ClientClaimData from './ClientClaimData'
import Tmwdata from './Tmwdata';

const Main = () => {
    const [claims, setClaims] = useState([
        { claimNumber: "10", claimDate: "2020-01-01", claimStatus: "Open", id: 1, },
        { claimNumber: "20", claimDate: "2020-02-01", claimStatus: "Open", id: 2 },
        { claimNumber: "30", claimDate: "2020-03-01", claimStatus: "Open", id: 3 },
        { claimNumber: "40", claimDate: "2020-04-01", claimStatus: "Denied", id: 4 },
    ])



    const [searchClaim, setSearchClaim] = useState("10");

    let [filteredClaims, setFilteredClaims] = useState([])

    let filterClaims = () => {
        filteredClaims = claims.filter(c => {
            return c.claimNumber === searchClaim
        })

        setFilteredClaims(filteredClaims)
    }

    function showClaims() {
        claims.map(claim => {
            return console.log("showmetheclaims", claim.claimNumber)
        }
        )
    }


    let saveClaim = (id, claimNumber, claimDate, claimStatus) => {

        for (let i = 0; i < claims.length; i++) {
            if (claims[i].id === id) {
                claims[i].claimNumber = claimNumber
                claims[i].claimDate = claimDate
                claims[i].claimStatus = claimStatus
                console.log("new save claims", claims)
                alert("saved")
                break;
            }
        }
        setClaims(claims)
    }


    return (
        <div>
            <div className="bg-color">
                <div className="row align-right  justify-content-end gray" >
                    <label className="">
                        Search Claim        </label>
                    <input type="text" className="col-md-2" value={searchClaim} onChange={(e) => setSearchClaim(e.target.value)} name="searchClaim" />
                    <button className=" btn-primary mr-4" onClick={filterClaims}>Search Claim</button>
                    <button className="btn-primary mr-4" onClick={showClaims()}>Show All Claims</button>
                    <div>
                    </div>
                </div>
                {filteredClaims.map(claim => {
                    return (
                        <div className="container ustify-content-center fade-in " key={claim.claimNumber}>
                            <ClientClaimData id={claim.id} number={claim.claimNumber} date={claim.claimDate} claimStatus={claim.claimStatus} saveClaim={saveClaim} />
                            <div className="m-4 h2"> More Content Below</div>
                            <Tmwdata />
                            <Tmwdata />

                            <Tmwdata />

                            <Tmwdata />

                            <Tmwdata />

                            <Tmwdata />

                            <Tmwdata />

                            <Tmwdata />


                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Main;
