import { ApolloProvider } from '@apollo/client';
import { client } from './api';
import { Map } from './Pages/Map';

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <Map />
            </div>
        </ApolloProvider>
    );
}

export default App;
