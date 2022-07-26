import React from "react";

const Login = (props) => {

    const {email, 
        setEmail,  
        password,  
        setPassword,  
        handleLogIn,  
        handleSignup,  
        hasAccount,  
        setHasAccount,  
        emailError,  
        passwordError,
    } = props;

    return(
        <section className="login">
<div className="loginContainer">
    <label>Username</label>
    <input type="text" 
    autoFocus 
    required 
    value={email} 
    onChange={(e) => setEmail(e.target.value)}
    />
    <p className="errorMsg">{emailError}</p>
    <label>Password</label>
    <input type="password" 
    autoFocus 
    required 
    value={password} 
    onChange={(e) => setPassword(e.target.value)}
    />
     <p className="errorMsg">{passwordError}</p>

     <div className="btnContainer">
        {hasAccount ? (
         <>
          <button onClick={handleLogIn}>Sign in</button>
          <p>
            Don't have an account ?
            <spam onClick={() => setHasAccount(!hasAccount)}>Sign up</spam>
            </p>
        </>
 ) : (
    <>
     <button onClick={handleSignup}>Sign up</button>
     <p>Have an account ?
      <spam onClick={() => setHasAccount(!hasAccount)}>Sign in</spam>
      </p>
    </>
        )}
     </div>
</div>
        </section>
    )
};

export default Login;