import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    background: #f5f5f5;
    box-sizing: border-box;
    margin: auto;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin: 0;
    }
`;

export const Toolbar = styled.div`
    display: flex;
    margin-top: 80px;

    span {
        flex-grow: 1;
        text-align: right;
    }

    @media screen and (max-width: 800px) {
        margin: 20px;
    }
`;

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 800;

    @media screen and (max-width: 800px) {
        margin: 20px;
    }
`;

export const Article = styled.article`
    font-size: 18px;
    font-weight: 400;

    img {
        max-width: 100%;
        height: auto;
    }

    p {
        @media screen and (max-width: 800px) {
            margin: 20px;
        }
    }
`;
