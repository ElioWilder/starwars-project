import './App.css';
import React from 'react';
import Header from './Component/Header/header.js';
import Footer from './Component/Footer/footer.js';
import DetailsPage from './Component/starwarsListPage/starwarsList/starwarsCard/detailsPage/DetailsPage.js';
import StarwarsListPage from './Component/starwarsListPage/StarwarsListPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

 const queryClient = new QueryClient();

 export default function App() {

   return (
      

     <QueryClientProvider client={queryClient}>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Example />} />
            <Route path='/person/:id' element={< DetailsPage/>} />
          </Routes>
       </BrowserRouter>
     </QueryClientProvider>

   )

 }

  const Example = () => {

   const { isLoading, error, data } = useQuery('repoData', () =>

     fetch('https://swapi.dev/api/people/').then(res => res.json())
   );

   if (isLoading) return 'Loading...';

   if (error) return 'An error has occurred: ' + error.message;
    console.log(data);
   return (

    <div className="App">
      <Header />
      <div>
        <StarwarsListPage people={data.results}></StarwarsListPage>
      </div>
      <Footer />
    </div>

   )

 }
