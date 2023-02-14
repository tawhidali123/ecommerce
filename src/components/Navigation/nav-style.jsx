import styled from 'styled-components';

export const NavDiv = styled.div`
    display: flex;
    background-color: rgba(245, 244, 242, .7);

    button {
        margin: 12px 25px;
        height: 38px;
        width: 146px;
        border-radius: 15px;
        background-color: #001355;
        color: white;
        box-shadow: 5px 6px #888888;
    }

    button:hover {
        background-color: #AABDFF;
    }

    .logo-icon {
        width: 20%;
    }

    .shop-title {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    h4 {
        font-family: monospace;
        font-size: 42px;
    }
    .cart-bttn {
        width: 20%;
    }
`;