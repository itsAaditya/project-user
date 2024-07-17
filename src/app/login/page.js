"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { TextField, Button } from '@mui/material';

 
export default function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const user = users.find(user => user.email === email);
    if (user) {
      router.push("/home")
    } else {
      setError('User not exists');
    }
  };

  return (    
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary"  >Login</Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}