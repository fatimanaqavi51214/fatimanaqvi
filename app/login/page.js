"use client";
import { useState } from 'react';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'YAALI110') {
      document.cookie = "auth_token=valid; path=/; max-age=864000";
      window.location.href = '/vault';
    } else {
      setError('غلط پاسورڈ / Incorrect Password');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', textAlign: 'center', width: '350px' }}>
        <h2 style={{ marginBottom: '24px', color: '#111827' }}>محفوظ لاگ ان (Vault)</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password..."
            style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }}
          />
          <button type="submit" style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', backgroundColor: '#2563eb', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>لاگ ان کریں</button>
        </form>
        {error && <p style={{ color: '#ef4444', marginTop: '16px', fontWeight: '500' }}>{error}</p>}
      </div>
    </div>
  );
}
