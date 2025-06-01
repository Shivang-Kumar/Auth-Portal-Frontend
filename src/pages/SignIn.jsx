import React,{useState} from "react";
const SignIn = () =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");
    const [error,setError]= useState({email: false, password: false});
    const [success, setSuccess]=useState(false);
    

    const handleSignIn = (event) => {


        event.preventDefault()

        const newError = {
            email: email.trim() === "",
            password: password.trim() === "",
        };
        setError(newError);
        if(newError.email||newError.password){
            //Error exists so need to alert
            return;
        }
       
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
            setEmail("");
            setPassword("");
            setError({email:false, password: false });
        }, 2000);
    };


    return (
        <form style={styles.container} onSubmit={handleSignIn}>
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
            placeholder="password"  
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />
            {error.password && <div style={{color:'red' , fontSize:'12px'}}>Password is required !</div>}


            <button style={{...styles.button,
                backgroundColor: email && password ? "#007bff" : "#999",
                cursor: email && password ? "pointer" : "not-allowed",
            }} type="submit" disabled={!email || !password}>Sign In</button>
        </form>
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
        textAlign:"centre",
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