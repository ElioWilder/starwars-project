import './App.css';
import React from 'react';
import Header from './Component/Header/header.js';
import Footer from './Component/Footer/footer.js';
import Search from './Component/Search/search.js'
import CardListPage from './Component/CardListPage/cardlistpage.js';
/*import CardList from './Component/CardList/cardlist.js';*/

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        {/* <Search /> */}
        {/* <CardListPage /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
