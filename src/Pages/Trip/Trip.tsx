import { Title, Wrapper, Article, Toolbar } from './Trip.style';
import { useNavigate } from 'react-router-dom';

import { ITranslation, translation } from '../../locale';
import { Loading } from '../../Components/Loading';
import { useEffect } from 'react';
import { useTrip } from './useTrip';
import { PAGE_TITLE } from '../../Constants/title';

export const Trip = () => {
    const navigate = useNavigate();
    const { languageSelected, data, isLoading, handleChangeLanguage } = useTrip();

    useEffect(() => {
        document.title = data?.myTrip?.title || PAGE_TITLE;

        return () => {
            document.title = PAGE_TITLE;
        };
    }, [data]);

    if (isLoading) return <Loading />;

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
