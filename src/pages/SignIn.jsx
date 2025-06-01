import React,{useState} from "react";
const SignIn = () =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");

    const handleSignIn = () => {
        alert(`Email:${email}\nPassword: ${password}`)
    };

    return (
        <div style={styles.container}>
            <div styles={styles.heading}>Sign In</div>
            <input
            styles={styles.input}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}>
            </input>

            <input style={styles.input} 
            type="password" 
            placeholder="password"  
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />

            <button style={styles.button} onClick={handleSignIn}>Sign In</button>
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
        curson:"pointer"
    },
};

export default SignIn;