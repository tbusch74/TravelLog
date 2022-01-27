import logo from './logo.svg';
import './App.css';
import {ApolloProvider} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login'; 


const httpLink = createHttpLink({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <Switch>
      <Route exact path="/login" component={Login}/>
    </Switch>
    </Router>
    </ApolloProvider>
  );
}

export default App;
