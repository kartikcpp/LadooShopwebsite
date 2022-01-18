import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightpink;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 50px;
  width: 40%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1``;
const Input = styled.input`
  margin-top: 20px;
  height: 40px;
  padding-left: 10px;
`;
const Button = styled.button`
  margin-top: 20px;
  height: 40px;
  padding-left: 20px;
  width: 30%;
  background-color: cyan;
  @media (max-width: 380px) {
  width:100%;
  }
`;
const Link=styled.a`
margin-top:20px;
text-decoration:underline;
cursor:pointer;`;

function Login() {
    return (
      <Container>
        <Wrapper>
          <Title>Log In </Title>
          <Form>
            
                        
            <Input placeholder="email" />
            <Input placeholder="password" />
            
            <Button>Log In</Button>
            <Link>Create an Account</Link>
          </Form>
        </Wrapper>
      </Container>
    );
}

export default Login
