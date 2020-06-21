import React, { useState } from 'react'

export default function ClientClaimData(props) {
    let id = props.id

    const [claimNumber, setClaimNumber] = useState(props.number)
    const [claimDate, setClaimDate] = useState(props.date)
    const [clNumber, setClNumber] = useState(props.clNumber)

    let consoleLog = () => {
        console.log(claimNumber, claimDate, clNumber)
    }

    consoleLog();

    let saveChanges = () => {
        props.saveClaim(id, claimNumber, claimDate, clNumber)
    }

    return (
        <div>
            <button onClick={saveChanges} >Save Changes</button>
            < div className="row" >
                <div className="mt-3">
                    <label className="justify-content-center col-md-2 " >
                        Claim Number
        </label>
                    <input onChange={(e) => setClaimNumber(e.target.value)} type="text" className="col-md-2" value={claimNumber} />
                    <label className="justify-content-center col-md-2">
                        Claim Date
    </label>
                    <input onChange={(e) => setClaimDate(e.target.value)} type="date" className="col-md-2" value={claimDate} />

                    <label className="justify-content-center col-md-2">
                        Client Claim Number
    </label>
                    <input onChange={(e) => setClNumber(e.target.value)} type="text" className="col-md-2 " value={clNumber} />

                </div>
            </div >
        </div>
    )
}
