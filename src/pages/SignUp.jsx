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
        <form style={styles.container} onSubmit={handleSignUp}>
            <h2 style={styles.heading}>Sign Up</h2>
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
        <button type='submit' style={styles.button}>Sign Up</button>
        <p style={{ fontSize: "14px", textAlign: "center" }}>
             Already have an account? <Link to="/">Sign In</Link>
        </p>
        </form>
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
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        cursor: "pointer",
    },
    error: {
    color: "red",
    fontSize: "12px",
  },
};

export default SignUp;