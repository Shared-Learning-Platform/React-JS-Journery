import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import LoginAsWaiterJSX from './LoginAsWaiterX'

export default function LoginAsWaiter() {
  const [user, setUser] = useState(false);
  const history = useHistory();

  const handleForm = (e) => {
    let userName = e.target.waiterEmail.value.trim()
    ? e.target.waiterEmail.value.trim()
    : false;
    let userPassword = e.target.waiterPassword.value.trim()
    ? e.target.waiterPassword.value.trim()
    : false;
    
    let formData = [
      userName,
      userPassword
    ] 
    console.log(formData);
  }

  return (
    <LoginAsWaiterJSX handleForm={handleForm} />
  )
}