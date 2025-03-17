import React, { useState, useEffect } from 'react';

// Function to fetch quote
const fetchQuote = async () => {
  const url = 'https://favqs.com/api/qotd';
  const apiKey = '61aeb5387f1ca3848015262eda617277'; // Your API key
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`, // Authorization header
      },
    });
    const data = await response.json();
    if (data && data.quote) {
      return data.quote.body; // Return the quote text
    } else {
      throw new Error('No quote found');
    }
  } catch (error) {
    throw new Error('Failed to fetch quote!');
  }
};

function Motivator() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch quote when component mounts
    const getQuote = async () => {
      try {
        const fetchedQuote = await fetchQuote();
        setQuote(fetchedQuote);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getQuote();
  }, []); // Run once on mount

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="motivator">
      <p>"{quote}"</p>
    </div>
  );
}

export default Motivator;
