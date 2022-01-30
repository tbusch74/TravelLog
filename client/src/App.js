import './App.css';
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({ 
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
    </Switch>
    </Router>
    </ApolloProvider>
  );
}

export default App;
