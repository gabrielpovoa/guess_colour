import React from 'react'
import { Container, Img, H1, Logo } from './style'
import guessMe from '../../assets/guessMe.png'

export const Header = () => {
    return (
        <Container>
            <Logo>
                <Img src={guessMe} alt="Guess" />
            </Logo>
            <H1>GuessMe <sup>?</sup></H1>
        </Container>
    )
}
