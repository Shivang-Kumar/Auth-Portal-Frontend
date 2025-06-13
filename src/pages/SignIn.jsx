import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const SignIn = () =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");
    const [error,setError]= useState({email: false, password: false});
    const [success, setSuccess]=useState(false);
    const navigate=useNavigate();
    const {setLoggedIn}=useAuth();
    

    const handleSignIn = (event) => {


        event.preventDefault()

        const newError = {
            email: email.trim() === "",
            password: password.trim() === "",
        };
        setError(newError);
        if(newError.email||newError.password){
            //Error exists so`no need to alert
            return;
        }

        const savedEmail = localStorage.getItem("signup_email");
        const savedPassword = localStorage.getItem("signup_password");
        if(email === savedEmail && password === savedPassword){  
            setLoggedIn(true);
            navigate("/home");
        }
        else{
            alert("Email or password doesnot match");
            navigate("/");
        }
     
    };


    return (
        <div className="p-3 mb-2 bg-danger text-black d-flex justify-content-center align-items-center vh-100">
        <form className="p-4 bg-light rounded shadow" style={{...styles.container, minWidth: "300px" }}  onSubmit={handleSignIn}>
            <div style={styles.heading}>Sign In</div>
            {success && (<div style={{color:"green", fontSize:"14px"}}>Login Successfull!</div>)}
            <input
            style={{...styles.input,
                border: error.email ? "2px solid red" : "1px solid #ccc",
            }}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <div style={{color:'red' , fontSize:'12px'}}>Email is required !</div>}

            <input style={{...styles.input,
                border: error.password ? "2px solid red" : "1px solid #ccc",
            }} 
            type="password" 
            placeholder="Password"  
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />
            {error.password && <div style={{color:'red' , fontSize:'12px'}}>Password is required !</div>}


            <button style={{...styles.button,
                backgroundColor: email && password ? "#007bff" : "#999",
                cursor: email && password ? "pointer" : "not-allowed",
            }} type="submit" disabled={!email || !password}>Sign In</button>
            <p style={{ fontSize: "14px", textAlign: "center" }}>
                 Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
        </form>
        </div>
        
    );
};

const styles={
    container:{
        maxWidth:"300px",
        margin:"50px auto",
        display:"flex",
        flexDirection:"column",
        gap:"10px",
    },
    heading:{
        textAlign:"center",
    },
    input:{
        padding:"10px",
        fontSize:"16px",
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

export default SignIn;