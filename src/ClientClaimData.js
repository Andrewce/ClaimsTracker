import React from 'react'

export default function ClientClaimData() {
    console.log("props check", this.props.ClaimsObj)
    return (
        < div className="row" >
            <div className="mt-3">
                <label className="justify-content-center col-md-2">
                    Claim Number
        </label>
                <input type="text" className="col-md-2" value="" />
                <label className="justify-content-center col-md-2">
                    Claim Date
    </label>
                <input type="text" className="col-md-2" />

                <label className="justify-content-center col-md-2">
                    Client Claim Number
    </label>
                <input type="text" className="col-md-2 " />

            </div>
        </div >
    )
}
