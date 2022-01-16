import React from 'react'
import { popularProducts } from '../data';
import Product from './Product';
import styled from 'styled-components';
const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between`;
function Products() {
    return (
        <div>
            <Container>
                {popularProducts.map(item => {
                    return(<Product key={item.id} item={item}/>)
        })}
            </Container>
        </div>
    )
}

export default Products
