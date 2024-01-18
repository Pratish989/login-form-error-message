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

console.log(registeredUsers)

function Button() {
  return <button>Login</button>;
}

function Input(props) { 
  return (
    <input
      type={props.type}
      value={props.value}
      placeholder={props?.placeholder}
      onChange={props.onChange}
      required={props.required}
    />
  );
}


function DraftLoginPage({onLogin}) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const isValidEmail = emailRegex.test(email);
 
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  const isValidPassword = passwordRegex.test(password);

  const submitLogin = (event) => {
    event.preventDefault();
    if (!isValidEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!isValidPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (isValidEmail && isValidPassword) {
      // alert(`Your email: ${email}\nYour password: ${password}`);
      console.log("both fields validated");
    }

    registeredUsers.forEach(({email: regEmail, password: regPassword})=>{
      if(regEmail === email && regPassword === password){
        console.log("logged in");
        onLogin();
        navigate("/home");
      }
    })

  };

  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={submitLogin}>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          style={{ borderColor: emailError ? "red" : "initial" }}
          required
        />
        {emailError && <p>Email is not in valid format</p>}

        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}

          style={{
            borderColor: passwordError ? "red" : "initial",
            borderRadius: passwordError ? "5px" : "initial",
          }}
          required
        />
        {passwordError && <p>Password is not in right format</p>}
        <Button />
      </form>
    </>
  );
}

export default DraftLoginPage;

