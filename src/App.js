import React from 'react'
import './App.css';
import Review from './Review';


function App() {
  return (
      <main className='container'>
        <header>
          <div className="title">
            <h1>Our Reviews</h1>
          </div>
          <div className="underline"></div>
        </header>

      <Review />

      </main>
  );
}

export default App;
