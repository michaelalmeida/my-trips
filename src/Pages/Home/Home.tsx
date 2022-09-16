import { Footer } from '../../Components/Footer';
import { Map } from '../Map';
import { HomeWrapper } from './Home.style';

export const Home = () => {
    return (
        <HomeWrapper>
            <Map />
            <Footer />
        </HomeWrapper>
    );
};
