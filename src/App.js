import React, {Component} from 'react'
import styled from 'styled-components'
import './style.css'
import Joke from './Joke'

const Button = styled.button `

    border: 0;
    border-radius: 0.375rem;
    padding: 1rem 2rem;
    font-size: 1.15rem;
    background-color: #edf4f6;
    background-color:blue;
    color: black;
    font-size: 4 rem;
    border: 4px solid black;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`

class App extends Component {
    state = {
        joke: {}
    }

    componentDidMount () {
        fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then(({id, value}) => {
            this.setState({joke: {id, value}})
        })
    }

    handleGetJoke = () => {
        this.componentDidMount()
    }

    
    render(){

        const {joke} = this.state

        return (
        <div className='cuerpo'>
            <div>{joke.id && <Joke data={joke}/>}</div>
            <Button onClick={this.handleGetJoke}>More Jokes</Button>
            
        </div>
        )
    }
}

export default App

