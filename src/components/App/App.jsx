import './App.css';
import { useState } from 'react';
import  Header  from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Suggestions from '../Suggestions/Suggestions';
import Sentence from '../Sentence/Sentence';
import { Routes, Route } from "react-router-dom";

function App() {
  const [selectedQuotes, setSelectedQuotes] = useState([]);

  const handleAddQuote = (newQuote) => {
    setSelectedQuotes((prevQuotes) => [...prevQuotes, newQuote]);
  };

  const handleDeleteQuote = (indexToDelete) => {
    setSelectedQuotes((prevQuotes) =>
      prevQuotes.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className='page'>
      <Routes>
        <Route 
         path='/'
         element={
          <>
              <Header />
              <Main 
                selectedQuotes={selectedQuotes} onDeleteQuote={handleDeleteQuote}
              />
              <Footer />
          </>
         }
        />  

        <Route 
          path='/suggestions'
          element={
          <>
              <Header />
              <Suggestions onSelectQuote={handleAddQuote}/>
              <Footer />
          </>
          }
        />

        <Route 
          path='/sentence'
          element={<Sentence />}
        />
      </Routes>
    </div>
  )
}

export default App;
