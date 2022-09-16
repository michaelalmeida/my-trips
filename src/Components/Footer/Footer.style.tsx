import styled from 'styled-components';
import { BLACK, WHITE } from '../../Constants/colors';

export const FooterWrapper = styled.footer`
    display: flex;
    width: 100%;
    height: 50px;
    display: flex;
    background: ${WHITE};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Paragraph = styled.p`
    color: ${BLACK};

    @media screen and (max-width: 800px) {
        font-size: 14px;
    }
`;
