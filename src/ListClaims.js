import React from 'react'

export default function ListClaims(claims) {

    const showClaims = [
        { claimNumber: "10", claimDate: "2020-01-01", claimStatus: "Open", id: 1, },
        { claimNumber: "20", claimDate: "2020-02-01", claimStatus: "Open", id: 2 },
        { claimNumber: "30", claimDate: "2020-03-01", claimStatus: "Open", id: 3 },
        { claimNumber: "40", claimDate: "2020-04-01", claimStatus: "Denied", id: 4 },
    ]
    return (
        <div>
            <div  ><table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Claim Number</th>
                        <th scope="col">Claim Date</th>
                        <th scope="col">Claim Status</th>
                    </tr>
                </thead>
                <tbody>
                    {showClaims.map(claim => (
                        <tr>

                            <th scope="row">{claim.claimNumber}</th>
                            <td>{claim.claimDate}</td>
                            <td>{claim.claimStatus}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>

            </div>



        </div>
    )
}
