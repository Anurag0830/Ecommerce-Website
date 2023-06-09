import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../Responsive"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
padding: 0px 20px;
display: flex; 
align-items: center; 
justify-content: space-between;
${mobile({ padding: "3px 0px" })};
`;
const Left = styled.div`
flex:1;
display: flex; 
align-items: center; 
`;
const Language = styled.div`
font-size: 15px;
font-weight: 600;
cursor: pointer;
${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
border: 1.5px solid black;
border-radius: 5px;
display: flex; 
align-items: center;
margin-left: 25px; 
padding: 5px;
`;

const Input= styled.input`
border: none;
${mobile({ width: "40px" })};
`;

const Center = styled.div`
flex:1;
text-align: center;
`;

const Logo = styled.h1`
margin: 10px;
${mobile({ fontSize: "20px" })};
`;

const Right = styled.div`
flex:1;
display: flex; 
align-items: center;
justify-content: flex-end;
${mobile({ flex:2, justifyContent: "center" })};
`;

const MenuItem= styled.div`
font-size: 15px;
font-weight: 600;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "11px", marginLeft: "10px;" })};
`;


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  console.log(quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
            <SearchContainer>
                <Input placeholder='Search'/>
                <Search style={{color:"black", fontSize:16}}/>
            </SearchContainer>
            </Left>
            <Center>
                
                <Logo>Style.Hub</Logo>
                
                </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <Link to="/cart">
                <MenuItem>
                <Badge badgeContent={quantity} color="primary">
             <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar