import React, { useState } from 'react'

export default function ClientClaimData(props) {
    let id = props.id

    const [claimNumber, setClaimNumber] = useState(props.number)
    const [claimDate, setClaimDate] = useState(props.date)
    const [claimStatus, setClaimStatus] = useState(props.claimStatus)

    let consoleLog = () => {
        console.log(claimNumber, claimDate, claimStatus)
    }

    consoleLog();

    let saveChanges = () => {
        props.saveClaim(id, claimNumber, claimDate, claimStatus)
    }

    return (
        <div className="mt-2" >
            <button className="btn btn-primary " onClick={saveChanges} >Save Changes</button>
            <div className="container">
                < div className="row" >
                    <div className="mt-3">
                        <label className="justify-content-center col-md-2 " >
                            Claim Number
                        </label>
                        <input onChange={(e) => setClaimNumber(e.target.value)} type="text" className="col-md-2 justify-content-center" value={claimNumber} readOnly />
                        <label className="justify-content-center col-md-2">
                            Claim Date
                        </label>
                        <input onChange={(e) => setClaimDate(e.target.value)} type="date" className="col-md-2 justify-content-center" value={claimDate} />
                        <label className="justify-content-center col-md-2">
                            Claim Status
                            </label>
                        <select className="col-md-2 justify-content-center" onChange={(e) => setClaimStatus(e.target.value)} name="claimStatus" id="claimStatus" value={claimStatus}>
                            <option value="Open">Open</option>
                            <option value="Denied">Denied</option>
                            <option value="Couter Claim">Counter Claim</option>
                            <option value="Withdrawn">Withdrawn</option>
                        </select>
                        <label className="justify-content-center col-md-2">
                            Truckmate Fb
                    </label>
                        <input type="text" className="col-md-2" />

                        <label className="justify-content-center col-md-2">
                            PO Number
                    </label>
                        <input type="text" className="col-md-2" />

                        <label className="justify-content-center col-md-2">
                            Client Claim Number
                    </label>
                        <input type="text" className="col-md-2 " />

                        <label className="justify-content-center col-md-2 mt-1 ">
                            Shipper Name
                    </label>
                        <input type="text" className="col-md-2 " />

                        <label className="justify-content-center col-md-2">
                            Agent Name
                    </label>
                        <input type="text" className="col-md-2 " />

                        <label className="justify-content-center col-md-2">
                            Consignee
                    </label>
                        <input type="text" className="col-md-2 " />
                    </div>
                </div >
            </div>
        </div>
    )
}
