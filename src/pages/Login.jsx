import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await login({email,password})
            navigate("/home")
        } catch (error) {
            console.log("login error:",error)
        }
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
