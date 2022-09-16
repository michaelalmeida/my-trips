import { FooterWrapper, Paragraph } from './Footer.style';

export const Footer = () => (
    <FooterWrapper>
        <Paragraph>
            Developed by{' '}
            <a href="https://github.com/michaelalmeida" target="_blank" rel="noopener noreferrer">
                Michael
            </a>
            . Curious about me?{' '}
            <a
                href="https://www.linkedin.com/in/michaelralmeida/"
                target="_blank"
                rel="noopener noreferrer">
                My LinkedIn
            </a>
        </Paragraph>
    </FooterWrapper>
);
