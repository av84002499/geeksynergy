import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  let navigate = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

const SubmitHandler =()=>{
  const localData = localStorage.getItem("data")
 const localStorageData = JSON.parse(localData)
 
  console.log(localStorageData.email)
  console.log("password",localStorageData.password)

  const data={
    email:email,
    password:password
  }

  if (data.email == localStorageData.email && data.password == localStorageData.password){
    // navigate to movies page 
    navigate("/Movies")


    Swal.fire({
      icon: 'success',
      title: 'Logged in successfully!',
      showConfirmButton: false,
      timer: 3000, // 3 seconds
    });
  }else{

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      showConfirmButton: false,
      timer: 3000, // 3 seconds
    });
  }
console.log(data)
}
 
  return (
    <div>
      <div className="container-sm">
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          
        </ul>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="loginName">Email</label>
            <input type="email" id="loginName" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="loginPassword">Password</label>
            <input type="password" id="loginPassword" className="form-control"  onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block col-4" onClick={SubmitHandler}>Login</button>
            <div className="text-center">
              <p>Not a member? <a href="Register">Register</a></p>
            </div>
          </div>

      </div>

    </div>
  )

}