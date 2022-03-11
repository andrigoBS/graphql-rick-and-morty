import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import MaterialProvider from "./components/providers/MaterialProvider";
import Routes from "./Routes";

const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER_URL,
    cache: new InMemoryCache(),
});

const App = () => {
    return (
        <React.StrictMode>
            <ApolloProvider client={client}>
                <MaterialProvider>
                    <Routes/>
                </MaterialProvider>
            </ApolloProvider>
        </React.StrictMode>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
