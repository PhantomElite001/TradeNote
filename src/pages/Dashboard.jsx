import React from "react";
import Statcard from "../assets/shared/Statcard";
import Actioncard from "../assets/shared/Actioncard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Dashboard(statvalues) {
    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <p>Welcome to your dashboard! Here you can manage your trades and view your trading history.</p>
            <div className="dashboard-stats">
                <Statcard title="Total Trades" value={statvalues.totalTrades} />
                <Statcard title="Total Debits" value={statvalues.totalDebits} />
                <Statcard title="Total Credits" value={statvalues.totalCredits} />
                <Statcard title="Net Balance" value={statvalues.netBalance} />
            </div>
            <div className="dashboard-actions">
                <Actioncard title="View Customers" description="See all your customers and manage their accounts." onClick={() => navigate("/customers")} />
                <Actioncard title="View Transactions" description="Review your transaction history and details." onClick={() => navigate("/transactions")} />
                <Actioncard title="Add New Trade" description="Create a new trade by adding a debit or credit." onClick={() => navigate("/add-trade")} />
            </div>
        </div>
    )
}