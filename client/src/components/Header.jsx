import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header=()=>{
const navigate= useNavigate();

const logout=()=>{
   localStorage.clear();
   navigate("/home");
}

return(
        <>  


        {localStorage.getItem("username") ? (
          <>
             <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="home">Home</Nav.Link>
         </Nav>

         Welcome : {localStorage.getItem("username")} email : 
         {localStorage.getItem("useremail")}  
         
         <button onClick={logout}> Logout </button>
      </Container>
    </Navbar>
          </>
        ) :(
        <>
        
        <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link as={Link} to="registration">Registration</Nav.Link>
         </Nav>
      </Container>
    </Navbar>

        </> 
      )}   
      

    
        </>
    )
}

export default Header;