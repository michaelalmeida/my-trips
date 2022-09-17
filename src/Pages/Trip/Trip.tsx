import { useParams } from 'react-router-dom';

import { Title, Wrapper, Article, Toolbar } from './Trip.style';
import { useApiClient } from '../../api/useApiClient';
import { GET_TRIP } from '../../api/myTrips/queries';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../Hooks/useLocalStorage';
import { LANGUAGE } from '../../Constants/language';
import { ITranslation, translation } from '../../locale';
import { Loading } from '../../Components/Loading';

export const Trip = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { value: languageSelected, setValue: setLanguageSelected } = useLocalStorage<string>({
        key: 'language',
        defaultValue: LANGUAGE.en,
    });

    const { data, isLoading } = useApiClient({
        query: GET_TRIP,
        variables: { id: id || '', locale: [languageSelected] },
    });

    if (isLoading) return <Loading />;

    const handleChangeLanguage = () => {
        const languageToSwitch = languageSelected === LANGUAGE.en ? LANGUAGE.pt_BR : LANGUAGE.en;

        setLanguageSelected(LANGUAGE[languageToSwitch as keyof ITranslation]);
    };

    return (
        <Wrapper>
            <Toolbar>
                <button
                    onClick={() => {
                        navigate('/');
                    }}>
                    {translation[languageSelected as keyof ITranslation].back}
                </button>
                <span>
                    <a href="#" onClick={handleChangeLanguage}>
                        {translation[languageSelected as keyof ITranslation].switchLanguage}
                    </a>
                </span>
            </Toolbar>
            <Title>{data.myTrip.title}</Title>
            <Article dangerouslySetInnerHTML={{ __html: data.myTrip.content.html }} />
        </Wrapper>
    );
};
