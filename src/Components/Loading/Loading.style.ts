import styled from 'styled-components';
import { MAIN_COLOR, WHITE } from '../../Constants/colors';

export const LoadingWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    display: flex;
    background: ${WHITE};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Spin = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: ${MAIN_COLOR};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
