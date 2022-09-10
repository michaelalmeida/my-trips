import { ApolloProvider } from '@apollo/client';
import { client } from './api';
import GlobalStyle from './GlobalStyle';
import { Routes } from './Routes/Routes';

function App() {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Routes />
        </ApolloProvider>
    );
}

export default App;
