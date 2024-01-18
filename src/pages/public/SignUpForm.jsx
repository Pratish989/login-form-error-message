import React from "react";

function EmailAddress(props) {
 const [value, setValue] = React.useState('');

 const emailChange = (e) => {
   setValue(e.target.value);
 };

 return (
   <div className={"form-group"}>
     <label htmlFor="emailAddress">Enter your email address:</label>
     {props.emailErrorH}
     <input
       type="text"
       tabIndex={"2"}
       className="form-control"
       id="emailAddress"
       value={value}
       onChange={emailChange}
     />
   </div>
 );
}



function Password(props) {
 const [value, setValue] = React.useState('');

 const pwdChange = (e) => {
   setValue(e.target.value);
 };

 return (
   <div className={"form-group"}>
     <label htmlFor="pwd">Enter your password:</label>

     {props.pwdErrorH}
     <input
       type="password"
       tabIndex={"3"}
       className="form-control"
       id="pwd"
       value={value}
       onChange={pwdChange}
     />
   </div>
 );
}

function SubmitBtn() {
 return (
   <button
     type={'submit'}
   >
     Submit
   </button>
 );
}

export default function SignupForm() {
 const [emailError, setEmailError] = React.useState('');
 const [pwdError, setPwdError] = React.useState('');

 const validation = (e) => {
   e.preventDefault();
   let req = 'This field is required!';
   let v = 0; // this is necessary for validation
   
   // email input conditions
   let email = document.getElementById('emailAddress');
   const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (email.value.length === 0) {
     setEmailError(<div className={'error'}>{req}</div>);
   } else if (!emailRegex.exec(email.value)) {
     setEmailError(<div className={'error'}>Check your address!</div>);
   } else {
     setEmailError('');
     v++;
   }
   // password input conditions
   if (pwd.value.length === 0) {
     setPwdError(<div className={'error'}>{req}</div>);
   } else if (pwd.value.length < 6) {
     setPwdError(<div className={'error'}>Password must be 6 characters at least!</div>);
   } else {
     setPwdError('');
     v++;
   }
 };

 return (
   <form onSubmit={validation}>
     <EmailAddress emailErrorH={emailError}/>
     <Password pwdErrorH={pwdError}/>
     <SubmitBtn/>
   </form>
 );
}
