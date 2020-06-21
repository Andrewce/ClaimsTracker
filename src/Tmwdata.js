import React from 'react'

export default function Tmwdata() {
    return (
        <div className="container">
            <div className="row">
                <div className="mt-5">
                    <label className="justify-content-center col-md-2">
                        Truckmate Fb
                    </label>
                    <input type="text" className="col-md-2" />

                    <label className="justify-content-center col-md-2">
                        FB Number
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
            </div>
        </div>


    )
}
