const axios = require('axios');

async function fetchRandomQuote() {
    try {
        const apiUrl = 'https://api.quotable.io/random';
        const response = await axios.get(apiUrl);

        if (!response.data) throw new Error('Failed to fetch a random quote');

        const quoteContent = response.data.content;
        console.log(`${quoteContent}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchRandomQuote();

