import styled from 'styled-components';

export const Container = styled.div`
    width: 84%;
    max-width: 1200px;
    height: 10vh;
    margin: 0;
    background-color: #DDDCE5;
    font-family: roboto, sans-serif;

    div, p, Link{
        display: inline-block;
    }
    #icon:hover{
        opacity: 0.5;
    }
    .namesDiv{
        margin-left: 20%;
    }
    .iconsDiv{
        float: right;
        margin-right: 8%;
        margin-top:5px;
    }
    p{
        font-size: 54px;
        font-weight: bold;
        justify-content:space-between;
    }
    .igor{
        color: black;
    }
    .martins{
        color: #403CFC;
        margin-left: 20px;
    }
    .instagram{
        display: inline-block;
        text-align: center;
        border-radius: 40px;
        color: #fff;
        background: #d6249f;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        box-shadow: 0px 3px 10px rgba(0,0,0,.25);
        margin-right: 20px;
    }
    .github{
        margin-right: 20px;
    }
    .linkedin{
        margin-right: 20px;
    }

`;