import { useQuery, DocumentNode } from '@apollo/client';

interface UseApiClientProps {
    query: DocumentNode;
    variables?: { [key: string]: string };
}

export const useApiClient = ({ query, variables }: UseApiClientProps) => {
    const { loading, error, data, refetch } = useQuery(query, { variables });

    return {
        isLoading: loading,
        error,
        data,
        refetch,
    };
};
