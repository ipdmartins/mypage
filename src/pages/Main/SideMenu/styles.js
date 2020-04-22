import styled from 'styled-components';

export const Container = styled.div`
    width: 16%;
    max-width: 305px;
    height: 100vh;
    margin: 0;
    background-color: #403CFC;
    display: flex;
    justify-content: center;

    .ellipse img{
        height: 175px;
        width: 100%;
        border-radius: 50%;
        background-color: #3d9970;
        margin-top: 3vh;
    }
    .ellipse p{
        color: #FFFFFF;
        margin-top: 25px;
        font-size: 20px;
        display: flex;
        justify-content: center;
    }
    .about{
        text-decoration:none;
    }
    .portfolio{
        text-decoration:none;
    }
    .work {
        text-decoration:none;
    }

    .education {
        text-decoration:none;
    }
    
    .skills{
        text-decoration:none;
    }

    .ellipse p:hover{
        font-size: 24px;
        font-weight: bold;
    }
`;
export const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 32px;
`;