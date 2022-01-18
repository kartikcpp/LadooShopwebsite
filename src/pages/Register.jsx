import React from "react";
import styled from 'styled-components'
const Container=styled.div`
width:100vw;
height:100vh;
background-color:lightpink;
display:flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
  padding: 40px;
  width: 40%;
  @media (max-width: 380px) {
    width:100%;
    padding: 20px;
  }
`;
const Form=styled.form`
display:flex;
flex-direction:column;
`;
const Title=styled.h1``;
const Input=styled.input`
margin-top:20px;
height:40px;
padding-left:10px;`;
const Button = styled.button`
  margin-top: 20px;
  height: 40px;
  padding-left: 20px;
  width:100%;
  background-color: cyan;

  
`;



function Register() {
  return (
    <Container>
        <Wrapper><Title>Create An Account</Title>
      <Form>
   
        <Input placeholder="first Name" />
        <Input placeholder="last name" />
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Input placeholder="confirm password" />
        <Button >Create</Button>
      </Form>
      
      </Wrapper>
    </Container>
  );
}

export default Register;
