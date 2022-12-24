import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    padding: 2rem 5%;
    background-color: #FF9000;
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const Logo = styled.div`
    width: 8rem; height: 8rem;
    background-color: #777;
    border-radius: 50%;
`;

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const H1 = styled.h1`
    color: #fff;
    align-self: flex-end;
`;