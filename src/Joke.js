import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div `

    display: flex;
    align-items: center;
    min-height: 125px;
    margin-bottom: 2rem;

`
const Speech = styled.div `

    
    padding: 1 rem;
    border-radius: 1rem;
    position: relative;


    &:after {
        left: 100%;
        top: 50%;
        border: solid transparent;
        content: '';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: transparent;
        border-left-color: #def3f5;
        border-width: 10px;
        margin-top: -10px;

    }
`

const Image = styled.img `

    width: 125px;
    border-radius: 50%;
`

const Label = styled.p `

    margin: 0;
    font-family: sans-serif;
    max-width: 25rem;
`


const Joke = ({data}) => (

    <Wrapper>
        <Speech>
            <Label>{data.value}</Label>
        </Speech>
        <Image src={`https://robohash.org/${data.id}`} alt={data.value}/>
    </Wrapper>
)

export default Joke