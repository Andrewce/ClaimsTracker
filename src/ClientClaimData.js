import React, { useState } from 'react'

export default function ClientClaimData(props) {
    let id = props.id

    const [claimNumber, setClaimNumber] = useState(props.number)
    const [claimDate, setClaimDate] = useState(props.date)
    const [claimStatus, setClaimStatus] = useState(props.claimStatus)
    const [clientName, setClientName] = useState(props.clientName)
    const [claimType, setClaimType] = useState(props.claimType)
    const [clientDenialReason, setClientDenialReason] = useState(props.clientDenialReason)
    const [claimCloser, setClaimCloser] = useState(props.claimCloser)
    const [fbNumber, setFbNumber] = useState(props.fbNumber)
    const [PO_Number, setPO_Number] = useState(props.PO_Number)




    let consoleLog = () => {
        console.log("showing the claims in the local state", claimNumber, claimDate, claimStatus, clientName, claimType, clientDenialReason, claimCloser, fbNumber, PO_Number)
    }

    consoleLog();

    let saveChanges = () => {
        props.saveClaim(id, claimNumber, claimDate, claimStatus, clientName, claimType, clientDenialReason, claimCloser, fbNumber, PO_Number)
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
                            Client Name
                    </label>
                        <input onChange={(e) => setClientName(e.target.value)} type="text" className="col-md-2 justify-content-center" value={clientName} />

                        <label className="justify-content-center col-md-2">
                            Claim Type
                            </label>
                        <select className="col-md-2 justify-content-center" onChange={(e) => setClaimType(e.target.value)} name="claimType" id="claimType" value={claimType}>
                            <option value="Loss">Loss</option>
                            <option value="Damage">Damage</option>
                            <option value="Concealed Damage">Concealed Damage</option>
                            <option value="Other">Other</option>
                        </select>

                        <label className="justify-content-center col-md-2">
                            Client Denial Reason
                            </label>
                        <select className="col-md-2 justify-content-center" onChange={(e) => setClientDenialReason(e.target.value)} name="clientDenialReason" id="clientDenialReason" value={clientDenialReason}>
                            <option value="Clear POD">Clear POD</option>
                            <option value="UNDNG RETURNED">Undamaged Freight Returned</option>
                            <option value="NO LOSS">No proof of loss</option>
                            <option value="Insuf Docs">Insuficient Documentation</option>
                            <option value="Time Barred">Time Barred</option>
                            <option value=""></option>

                        </select>

                        <label className="justify-content-center col-md-2 mt-1 ">
                            Claim Closer
                            </label>
                        <select className="col-md-2 justify-content-center" onChange={(e) => setClaimCloser(e.target.value)} name="claimCloser" id="claimCloser" value={claimCloser}>
                            <option value="Malini">Malini</option>
                            <option value="Dre">Dre</option>
                            <option value="Talen">Talen</option>
                            <option value="Anastasia">Anastasia</option>
                        </select>
                        <label className="col-md-2 justify-content-center" >
                            FB_Number                    </label>
                        <input onChange={(e) => setFbNumber(e.target.value)} id="fbNumber" name="fbNumber" value={fbNumber} type="text" className="col-md-2 " />

                        <label className="col-md-2 justify-content-center" >
                            PO Number
                    </label>
                        <input onChange={(e) => setPO_Number(e.target.value)} value={PO_Number} id="PO_Number" name="PO_Number" type="text" className="col-md-2 " />
                    </div>
                </div >
            </div>
        </div>
    )
}
