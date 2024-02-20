import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchKanyeQuote = async () => {
      try {
        const response = await fetch('https://api.kanye.rest/');
        const data = await response.json();
        setQuote(data.quote);
      } catch (error) {
        console.error('Error fetching Kanye quote:', error);
      }
    };

    fetchKanyeQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanye West Quote Generator</h1>
        {quote && <p>{quote}</p>}
      </header>
    </div>
  );
}

export default App;
