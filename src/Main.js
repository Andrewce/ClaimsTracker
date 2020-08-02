import React, { useState } from 'react'
import ClientClaimData from './ClientClaimData'
import Tmwdata from './Tmwdata';
import { Link } from 'react-router-dom';

const Main = () => {
    const [claims, setClaims] = useState([
        { claimNumber: "10", claimDate: "2020-01-01", claimStatus: "Open", id: 1, clientName: "Walmart", claimType: "Loss", clientDenialReason: "NO LOSS", claimCloser: "Dre", FB_Number: "10023232", PO_Number: "12312A" },
        { claimNumber: "20", claimDate: "2020-02-01", claimStatus: "Open", id: 2, clientName: "Walmart", claimType: "Loss", clientDenialReason: "NO LOSS", claimCloser: "Malini", FB_Number: "32123232", PO_Number: "12312B" },
        { claimNumber: "30", claimDate: "2020-03-01", claimStatus: "Open", id: 3, clientName: "Walmart", claimType: "Damage", clientDenialReason: "NO LOSS", claimCloser: "Talen", FB_Number: "32323232", PO_Number: "12312C" },
        { claimNumber: "40", claimDate: "2020-04-01", claimStatus: "Denied", id: 4, clientName: "Walmart", claimType: "Other", clientDenialReason: "NO LOSS", claimCloser: "Dre", FB_Number: "32123111", PO_Number: "12312D" }

    ])



    const [searchClaim, setSearchClaim] = useState("10");

    let [filteredClaims, setFilteredClaims] = useState([])

    let filterClaims = () => {
        filteredClaims = claims.filter(c => {
            return c.claimNumber === searchClaim
        })

        setFilteredClaims(filteredClaims)
    }



    let saveClaim = (id, claimNumber, claimDate, claimStatus, clientName, claimType, clientDenialReason, claimCloser, FB_Number, PO_Number) => {

        for (let i = 0; i < claims.length; i++) {
            if (claims[i].id === id) {
                claims[i].claimNumber = claimNumber
                claims[i].claimDate = claimDate
                claims[i].claimStatus = claimStatus
                claims[i].clientName = clientName
                claims[i].claimType = claimType
                claims[i].clientDenialReason = clientDenialReason
                claims[i].claimCloser = claimCloser
                claims[i].FB_Number = FB_Number
                claims[i].PO_Number = PO_Number
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
                    <Link to="/ListClaims">
                        <button className="btn-primary mr-4" >Show All Claims</button>
                    </Link>
                    <div>
                    </div>
                </div>
                {filteredClaims.map(claim => {
                    return (
                        <div className="container ustify-content-center fade-in " key={claim.claimNumber}>
                            <ClientClaimData
                                id={claim.id}
                                number={claim.claimNumber}
                                date={claim.claimDate}
                                claimStatus={claim.claimStatus}
                                clientName={claim.clientName}
                                claimType={claim.claimType}
                                clientDenialReason={claim.clientDenialReason}
                                claimCloser={claim.claimCloser}
                                fbNumber={claim.FB_Number}
                                PO_Number={claim.PO_Number}
                                saveClaim={saveClaim}
                            />
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
