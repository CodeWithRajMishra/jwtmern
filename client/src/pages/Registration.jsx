import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {message} from "antd";
import {useNavigate} from "react-router-dom";
const Registration=()=>{
    const [input, setInput] =useState({});    
    const navigate= useNavigate();
    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(values=>({...values, [name]:value}));
       console.log(input);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
             let api="http://localhost:8000/user/registration";
             const response =await  axios.post(api, input);
             console.log(response);
             message.success(response.data.msg);
             navigate("/login");
        } catch (error) {
             console.log(error);
        }
    }
    return(
        <>
        <div style={{width:"400px", margin:"auto"}}>
            <h2> User Registration</h2>
        <Form style={{width:"400px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact no</Form.Label>
        <Form.Control type="text" name="contact" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name="password" onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Registration;