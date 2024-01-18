import React from "react";
import { useState } from "react";

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

function EmailAddress(props) {
 const [value, setValue] = useState('');

 const emailChange = (e) => {
   setValue(e.target.value);
 };

 return (
   <div>
     <label htmlFor="emailAddress">Enter your email address:</label>
     <br />
     {props.emailErrorH}
     <input
       type="text"
       id="emailAddress"
       className="input"
       value={value}
       onChange={emailChange}
     />
   </div>
 );
}

function Password(props) {
 const [value, setValue] = useState('');

 const pwdChange = (e) => {
   setValue(e.target.value);
 };

 return (
   <div>
     <label htmlFor="pwd">Enter your password:</label>
     <br />
     {props.pwdErrorH} 
     <input
       type="password"
       id="pwd"
       className="input"
       value={value}
       onChange={pwdChange}
     />
   </div>
 );
}

export default function LoginPageTest() {
 const [emailError, setEmailError] =useState('');
 const [pwdError, setPwdError] = useState('');

 const validation = (e) => {
   e.preventDefault();
   let req = 'This field is required!';
   let v = 0;

   // email input conditions
   let email = document.getElementById('emailAddress');
   const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (email.value.length === 0) {
     setEmailError(<div className={'error'}>{req}</div>);
   } else if (!emailRegex.exec(email.value)) {
     setEmailError(<div className={'error'}>Email must be in valid format</div>);
   } else {
     setEmailError('');
     v++;
   }

   // password input conditions
   const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
   let pwd = document.getElementById('pwd');
   if (pwd.value.length === 0) {
     setPwdError(<div className={'error'}>{req}</div>);
   } else if (pwd.value.length < 6) {
     setPwdError(<div className={'error'}>Password must be 6 characters at least!</div>);
   } else if (!passwordRegex.exec(pwd.value)){
     setPwdError(<div className={'error'}> Password must be in valid format</div>)
   } else if(pwd.value === "Admin123#"){
     console.log("logged in")
   }else {
     setPwdError('');
     v++;
   }
 };

 return (
   <form onSubmit={validation}>
     <EmailAddress emailErrorH={emailError}/>
     <Password pwdErrorH={pwdError}/>
     <button type={'submit'}> Submit</button>
   </form>
 );
}
