import { useQuery, DocumentNode } from '@apollo/client';

interface UseApiClientProps {
    query: DocumentNode;
}

export const useApiClient = ({ query }: UseApiClientProps) => {
    const { loading, error, data } = useQuery(query);

    return {
        isLoading: loading,
        error,
        data,
    };
};
