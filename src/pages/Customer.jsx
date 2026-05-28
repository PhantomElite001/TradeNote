import React from "react";
import {useNavigate}="react-router-dom";
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
                    <button onClick={}>View Transactions</button>
                </div>
              
                
                <button>Manage Credits</button>
                <button>Manage Debits</button>
            </div>
        </div>