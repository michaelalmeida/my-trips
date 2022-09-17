import { useParams } from 'react-router-dom';

import { Title, Wrapper, Article, Toolbar } from './Trip.style';
import { useApiClient } from '../../api/useApiClient';
import { GET_TRIP } from '../../api/myTrips/queries';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../Hooks/useLocalStorage';
import { LANGUAGE } from '../../Constants/language';
import { translation } from '../../locale';
import { Loading } from '../../Components/Loading';

export const Trip = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { value: languageSelected, setValue } = useLocalStorage<string>({
        key: 'language',
        defaultValue: LANGUAGE.en,
    });

    const isLanguageSelectedEnglish = languageSelected === LANGUAGE.en;

    const { data, isLoading } = useApiClient({
        query: GET_TRIP,
        variables: { id: id || '', locale: [languageSelected] },
    });

    if (isLoading) return <Loading />;

    return (
        <Wrapper>
            <Toolbar>
                <button
                    onClick={() => {
                        navigate('/');
                    }}>
                    {translation[+isLanguageSelectedEnglish].back}
                </button>
                <span>
                    <a
                        href="#"
                        onClick={() => {
                            setValue(isLanguageSelectedEnglish ? LANGUAGE.pt : LANGUAGE.en);
                        }}>
                        {translation[+isLanguageSelectedEnglish].switchLanguage}
                    </a>
                </span>
            </Toolbar>
            <Title>{data.myTrip.title}</Title>
            <Article dangerouslySetInnerHTML={{ __html: data.myTrip.content.html }} />
        </Wrapper>
    );
};
