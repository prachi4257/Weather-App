
import { useState } from "react";
import "../App.css";
export default function Signup() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = (e)=>{
      e.preventDefault();
      localStorage.setItem('user',JSON.stringify({name,email,password}));
      alert('Signup successful! Please login now.');
      setName("");
      setEmail("");
      setPassword("");
  }
  return (
   <div className="container">
        <div className="card">
            <h2>Signup Page</h2>
            <form action="" onSubmit={handleSignup}>
                <input value={name} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                <input value={email} type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
                <input value={password}  type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Signup</button>
            </form>
        </div>
   </div>
  );
}
