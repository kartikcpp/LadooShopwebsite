import React from 'react'
import styled from 'styled-components'
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Container = styled.div`
height: 60px;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content: space-between;

`
const Left = styled.div`flex:1;
display:flex;
align-items:center`

const Center = styled.div`flex:1;
text-align:center`

const Right = styled.div`flex:1;
display:flex;
align-items:center;
justify-content: flex-end;
`
const Language=styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer=styled.div`
    border:1px solid lightcyan;
    display: flex;
    align-items: center;
    margin-left:25px ;
    padding:5px;

`
const Input=styled.input`
    border:none;
`
const Logo=styled.h1`
    font-weight: bold;
`
const MenuItem=styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
function Navbar() {
   
    return (
      <div>
        <Container>
          <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input />
                <SearchIcon></SearchIcon>
              </SearchContainer>
            </Left>
            <Center>
              <Logo>LadooShop...</Logo>
            </Center>
            <Right>
              <MenuItem>Register</MenuItem>
              <MenuItem>Login</MenuItem>
              <MenuItem>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon/>
                </Badge>
              </MenuItem>
            </Right>
          </Wrapper>
        </Container>
      </div>
    );
}

export default Navbar
