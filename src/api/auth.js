const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3000';

async function register({ email, username, password }) {
    const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password })
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: res.statusText }));
        throw new Error(err.message || 'Registration failed');
    }
    return res.json();
}

async function login({ email, password }) {
    const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: res.statusText }));
        throw new Error(err.message || 'Login failed');
    }
    const data = await res.json();
    if (data.token) localStorage.setItem('token', data.token);
    return data;
}

function logout() {
    localStorage.removeItem('token');
}

export { register, login, logout };
