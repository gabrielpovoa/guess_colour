import styled from 'styled-components';

export const Score = styled.div`
    padding: 2rem 5%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    p {
        font-size: 2rem;
        color: #778;
        font-weight: bold;
    }
    span {
        font-size: 3rem;
        font-weight: bolder;
        color: #000;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 5%;
    height: calc(100vh - 10rem);
`;

export const GuessMe = styled.div`
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    width: 40rem; height: 30rem;
    max-width: 100%;
    border-radius: .4rem;
`;

export const Options = styled.div`
    width: 40rem;
    max-width: 100%;
    margin-block: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button`
    padding:.6rem;
    border-radius: .4rem;
    background-color: #c1c1c1;
    font-weight: bolder;
    cursor: pointer;
`;