import ReactDOM from 'react-dom/client'
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import client from './apolloClient'; 
import "bootstrap/dist/css/bootstrap.min.css"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
   <BrowserRouter>
    <App />
   </BrowserRouter>
 </ApolloProvider>,
)

