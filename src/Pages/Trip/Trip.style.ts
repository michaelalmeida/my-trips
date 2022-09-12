import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    width: 800px;
    background: #f5f5f5;
    box-sizing: border-box;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin: 0;
        padding: 80px;
    }
`;

export const Toolbar = styled.div`
    text-align: right;
`;

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 800;
`;

export const Article = styled.article`
    font-size: 18px;
    font-weight: 400;
`;
