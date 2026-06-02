import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import {useNavigate} from "react-router-dom";
export default function Customer(id) {
    const navigate = useNavigate();

    function getCustomerInfo() {
        // Fetch customer info from API using the provided ID
    }
    return (
        <div className="customer-container">
            <h2>Customer Page</h2>
            <p>Here you can view your customer's info, manage credits and debits, and keep track of your transactions.</p>
            <p>Customer ID: {id}</p>
            <div className="customer-actions">
                <div className="transactions-preview">
                    <h3>Recent Transactions</h3>
                    <ul>
                        {getCustomerInfo().transactions.map(transaction => (
                            <li key={transaction.id}>{transaction.description} - {transaction.amount}</li>
                        ))}
                    </ul>
                    <button onClick={
                        navigate("/transactions")
                    }>View Transactions</button>
                </div>
              
                <div className="new-trade"></div>
                    <h3>New Trade</h3>
                    <p>Initiate a new trade for this customer.</p>
                    <button onClick={() => navigate("/add-trade")}>Add Trade</button>
                    <Outlet />
                </div>
                <button>Manage Credits</button>
                <button>Manage Debits</button>
            </div>
    )
    
                    }