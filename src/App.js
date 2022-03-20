import './App.css';
import React from 'react';
import Header from './Component/Header/header.js';
import Footer from './Component/Footer/footer.js';
import StarwarsListPage from './Component/starwarsListPage/StarwarsListPage.js';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

 const queryClient = new QueryClient();

 export default function App() {

   return (

     <QueryClientProvider client={queryClient}>
       <Example />
     </QueryClientProvider>

   )

 }

 function Example() {

   const { isLoading, error, data } = useQuery('repoData', () =>

     fetch('https://swapi.dev/api/').then(res => res.json())
   );

   if (isLoading) return 'Loading...';

   if (error) return 'An error has occurred: ' + error.message;

   return (

    <div className="App">
      <Header />
      <div>
        {/* <StarwarsListPage /> */}
      </div>
      <Footer />
    </div>

   )

 }
