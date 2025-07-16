import { useState } from "react"

function LoginForm()
{
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')

    const handleLogin=(e)=>{
        e.preventDefault();
        if(!email || !password)
        {
            setError('All Fields Required')
        }
        else if(password.length<6)
        {
            setError('password length should be short 6')
        }
        else{
            setError('')
            alert("login successfull")
        }
    }
    return(
        <div class="box">
        <>
        <form onSubmit={handleLogin}>
            <div class="line">
                <label>Email :</label>
                <input 
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />  
            </div>
            <div class="line">
                <label>Password :</label>
                <input 
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />  
            </div>
            {error && <p style={{color:'red'}}>{error}</p>}
            <button type="submit">Login</button>
        </form>
        </>
        </div>
    )
    
}
export default LoginForm