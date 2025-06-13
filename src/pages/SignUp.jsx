import React, { useState } from 'react';
import {useNavigate , Link} from 'react-router-dom';

const SignUp= () =>{
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[error,setError]=useState({email:false, password:false});
    const navigate=useNavigate();

    const handleSignUp=(e)=>{
        e.preventDefault();
        const newError={
            email: email.trim() === '',
            password: password.trim() ==='',
        };
        setError(newError);
        if(newError.email||newError.password) {
            return;
        }
        //saving to local storage later will switch with backend login
        localStorage.setItem("signup_email",email);
        localStorage.setItem("signup_password",password);

        alert("account created successfully");
        navigate("/");

    };

    

    return (
         <div className="p-3 mb-2 bg-danger text-black d-flex justify-content-center align-items-center vh-100">
        <form  className="p-4 bg-light rounded shadow" style={{...styles.container, minWidth: "300px"}} onSubmit={handleSignUp}>
            <div style={styles.heading}>Sign Up</div>
            <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{...styles.input, border:error.email ? "2px solid red":"1px solid #ccc", 
            }}
            />
            {error.email && (
                <div style={styles.error}>Email is Required!</div>
            )}
            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{...styles.input,
                border: error.password ? "2px solid red" : "1px solid #ccc"
            }}
            />
        {error.password && (
            <div style={styles.error}>Password is required!</div>
        )}
        <button type='submit' style={{...styles.button, backgroundColor: email && password ? "#007bff" : "#999",
                cursor: email && password ? "pointer" : "not-allowed",}} disabled={!email || !password}>Sign Up</button>
        <p style={{ fontSize: "14px", textAlign: "center" }}>
             Already have an account? <Link to="/">Sign In</Link>
        </p>
        </form>
        </div>
    );

};

const styles={
    container : {
        maxWidth: "300px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    heading:{
        textAlign: "center",
    },
    input:{
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "white",
        color: "white",
        border: "none",
        cursor: "pointer",
    },
    error: {
    color: "red",
    fontSize: "12px",
  },
  button:{
        padding:"10px",
        fontSize:"16px",
        backgroundColor:"#007bff",
        color:"white",
        border:"none",
        cursor:"pointer"
    },
};

export default SignUp;