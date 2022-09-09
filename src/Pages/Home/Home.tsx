import { ToggleTheme } from '../../Components/ToggleTheme';
import useLocalStorage from '../../Hooks/useLocalStorage';
import { Map } from '../Map';
import { HomeWrapper } from './Home.style';

export const Home = () => {
    const [isDarkTheme, setIsDarkTheme] = useLocalStorage({
        key: 'isDarkTheme',
        defaultValue: true,
    });

    return (
        <HomeWrapper>
            <ToggleTheme setTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
            <Map isDarkTheme={isDarkTheme} />
        </HomeWrapper>
    );
};
