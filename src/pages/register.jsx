import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
export default function Register() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await login({username,password})
            navigate("/home")
        } catch (error) {
            console.log("registration error:",error)
        }
    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )