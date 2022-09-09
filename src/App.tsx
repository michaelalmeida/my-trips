import { ApolloProvider } from '@apollo/client';
import { client } from './api';
import { Home } from './Pages/Home';

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <Home />
            </div>
        </ApolloProvider>
    );
}

export default App;
