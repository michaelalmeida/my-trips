import { useParams } from 'react-router-dom';
import { LANGUAGE } from '../../Constants/language';
import useLocalStorage from '../../Hooks/useLocalStorage';
import { useApiClient } from '../../api/useApiClient';
import { GET_TRIP } from '../../api/myTrips/queries';
import { ITranslation } from '../../locale';

export const useTrip = () => {
    const { id } = useParams();

    const { value: languageSelected, setValue: setLanguageSelected } = useLocalStorage<string>({
        key: 'language',
        defaultValue: LANGUAGE.pt_BR,
    });
    const { data, isLoading } = useApiClient({
        query: GET_TRIP,
        variables: { id: id || '', locale: [languageSelected] },
    });

    const handleChangeLanguage = () => {
        const languageToSwitch = languageSelected === LANGUAGE.en ? LANGUAGE.pt_BR : LANGUAGE.en;

        setLanguageSelected(LANGUAGE[languageToSwitch as keyof ITranslation]);
    };

    return {
        languageSelected,
        data,
        isLoading,
        handleChangeLanguage,
    };
};
