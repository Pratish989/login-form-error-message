/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const registeredUsers = [
  {
    email: "admin@example.com",
    password: "Admin123#",
  },
  {
    email: "pratish989@gmail.com",
    password: "MicrosofT@@99",
  },
  {
    email: "abc@example.co.uk",
    password: "ABCabc_@10",
  },
  {
    email: "disposable.style.email.with+symbol@example.com",
    password: "disPOSE&123",
  },
  {
    email: "mattGray@labor.de",
    password: "9matt%Gray",
  },
];

function Input(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required={props.required}
      onBlur={props.onBlur}
      style={props.style}
    />
  );
}

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyEmailError, setEmptyEmailError] = useState(false);
  const [emptyPasswordError, setEmptyPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userRegisteredError, setUserRegisteredError] = useState(false);
  const[registryErrorMessage, setRegistryErrorMessage] = useState('')
  const [focusInputEmail, setFocusInputEmail] = useState(false);
  const [focusInputPassword, setFocusInputPassword] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const isValidEmail = emailRegex.test(email);

  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  const isValidPassword = passwordRegex.test(password);

  const submitLogin = (event) => {
    event.preventDefault();
    !isValidEmail ? setEmailError(true) : setEmailError(false);
    !isValidPassword ? setPasswordError(true) : setPasswordError(false);

    if (email === "") {
      setEmptyEmailError(true);
      setEmailError(false);
      setUserRegisteredError(false);
    }

    if (password === "") {
      setEmptyPasswordError(true);
      setPasswordError(false);
      setUserRegisteredError(false);
    }

    if (isValidEmail && isValidPassword) {
      console.log("both fields validated");
    }

    registeredUsers.forEach(
      ({ email: registeredEmail, password: registeredPassword }) => {
        if (registeredEmail === email && registeredPassword === password) {
          console.log("logged in");
          onLogin();
          navigate("/home");
        }   
        // else if (emailError === true && passwordError === true) {
        //     setUserRegisteredError(false);
        // }
       if(registeredEmail === email && registeredPassword !== password){
          setRegistryErrorMessage('Password is wrong')
            // setUserRegisteredError(true);
            // if email 
        }
        if(registeredEmail !== email && registeredPassword !== password){
          setRegistryErrorMessage("This email is not registered with us")
        }
      }
    );
  };

  const InputStyleEmail = {
    borderColor: emailError || emptyEmailError ? "red" : null,
  };

  const InputStylePassword = {
    borderColor: passwordError || emptyPasswordError ? "red" : null,
  };

  return (
    <div className="login-form">
      <h2>Login Form 💼</h2>
      <form onSubmit={submitLogin}>
        <Input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
            setEmptyEmailError(false);
            setUserRegisteredError(false);
            setEmailError(false);
          }}
          style={InputStyleEmail}
          onBlur={() => {
            if (email === "") {
              setFocusInputEmail(true);
              setEmptyEmailError(true);
            }
            if (!isValidEmail && email !== "") {
              console.log("email not valid and not zero");
              setEmailError(true);
              setFocusInputEmail(false);
            }
          }}
        />
        {emptyEmailError && (
          <p style={{ color: "red" }}> Email Address Required</p>
        )}
        {emailError && <p style={{ color: "red" }}>Invalid Email Format</p>}
        <br />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
            setEmptyPasswordError(false);
            setUserRegisteredError(false);
            setPasswordError(false);
          }}
          style={InputStylePassword}
          onBlur={() => {
            if (password === "") {
              setFocusInputPassword(true);
              setEmptyPasswordError(true);
            } else if (!isValidPassword && password !== "") {
              setPasswordError(true);
              setFocusInputPassword(false);
              setFocusInputEmail(false);
            }
          }}
          // onBlur = {()=> password==="" ?  setFocusInputPassword(true) : setFocusInputPassword(false)}
        />
        {emptyPasswordError && (
          <p style={{ color: "red" }}> Password Required</p>
        )}
        {passwordError && (
          <p style={{ color: "red" }}>Invalid Password Format</p>
        )}
        {!emptyPasswordError &&
          !emailError &&
          !passwordError &&
          !emptyEmailError &&
          userRegisteredError && (
            <p style={{ color: "red" }}>
              Sorry, we can't find an account with this email address
            </p>
          )}
        <br />
        {<p style={{color: "red"}}> {registryErrorMessage}  </p>}
        <button
          disabled={!isValidEmail || !isValidPassword}
          onClick={() => console.log("button clicked")}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

// password wrong? then why wrong?

// It contains at least one uppercase character
// It contains at least one lowercase character
// It contains at least one digit
// It contains at least one special character
// It is at least eight characters long

// if email is not in registry -> we cant found email address with this account.
// if email is in registry , but password is wrong -> incorrect password, try again.
