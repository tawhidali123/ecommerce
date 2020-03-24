import styled from 'styled-components';

export const HomeStyled = styled.div`
    .container{
        text-align: center;


        .slide_container{
            width: 100%;
            height: 100%;
            margin: 50px 0;
            display: flex;
            overFlow-x: auto;
            
            
            ${'' /* overFlow: hidden; */}

            button{
                width: 45px;
                height: 45px;
            }


            img{
                width: 75vw;
                height: 50vh;
                margin: 30px;
                
            }
        }


    }

`;