import {useState} from "react";
export default function Receipt({tradeDetails}){
        return(
            <div id="receipt-container">
                <h2>Trade Receipt</h2>
                <p>Thank you for your trade! Here are the details of your transaction:</p>
                <div className="receipt-details">
                    <table className="receipt">
                    <thead>
                        <tr>
                        <th>Description</th>
                        <th>Unit Price</th>
                        <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>  
                        <tr>
                        <td>{tradeDetails.description}</td>
                        <td>{tradeDetails.unitPrice}</td>
                        <td>{tradeDetails.amount}</td>
                        </tr>
                    </tbody>
                    </table>

                </div>
            </div>
        )}