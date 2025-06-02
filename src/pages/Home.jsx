import React from "react";

const Home = () => {
    return (
        <div style={styles.container}>
            <h1>Welcome to the Home Page!</h1>
            <p>You have successfully signed in.</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
    },
};

export default Home;