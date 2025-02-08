import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");  
const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
   try {
    let api="https://jwtmern-uaak.onrender.com/user/login";

     const response= await axios.post(api, {email:email, password:password});
     console.log(response.data)
     localStorage.setItem("token", response.data.token);
     navigate("/home")
   } catch (error) {
      console.log(error);
   }
  }

  return(
        <>
        <div style={{width:"400px", margin:"auto"}}>
            <h2> User Login</h2>
        <Form style={{width:"400px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Login;