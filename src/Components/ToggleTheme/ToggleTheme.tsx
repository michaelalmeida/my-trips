import { ToggleWrapper } from './ToggleTheme.style';

interface IToggleThemeProps {
    setTheme: (isDarkTheme: boolean) => void;
    isDarkTheme: boolean;
}

export const ToggleTheme = ({ setTheme, isDarkTheme }: IToggleThemeProps) => {
    const handleToggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(!isDarkTheme);
    };

    return (
        <ToggleWrapper>
            <input type="checkbox" id="switch" onChange={handleToggleTheme} checked={isDarkTheme} />
            <label htmlFor="switch">Toggle</label>
        </ToggleWrapper>
    );
};
