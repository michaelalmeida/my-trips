import { useParams } from 'react-router-dom';

import { Title, Wrapper, Article, Toolbar } from './Trip.style';
import { useApiClient } from '../../api/useApiClient';
import { GET_TRIP } from '../../api/myTrips/queries';

export const Trip = () => {
    const { id } = useParams();

    const { data, isLoading } = useApiClient({ query: GET_TRIP, variables: { id: id || '' } });

    if (isLoading) return <p>Loading</p>;

    return (
        <Wrapper>
            <Toolbar>
                Trocar para <a href="test">Português</a>
            </Toolbar>
            <Title>{data.myTrip.title}</Title>
            <Article dangerouslySetInnerHTML={{ __html: data.myTrip.content.html }} />
        </Wrapper>
    );
};
