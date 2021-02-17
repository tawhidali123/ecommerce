import styled from 'styled-components';

export const NavDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto auto;
    grid-gap: 10px;
    background-color: rgb(245, 244, 242);

    button {
        margin: 50px 25px;
        height: 50px;
        width: 100px;
        border-radius: 15px;
        background-color: rgba(13, 9, 0, 0.8);
        color: white;
        box-shadow: 5px 6px #888888;
    }
`;