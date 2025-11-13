const axios = require('axios');

const EXCHANGE_RATE_API_URL = 'https://api.exchangerate.host/latest';

/**
 * Fetch the latest exchange rates from the API.
 * @returns {Promise<Object>} The exchange rates data.
 */
const fetchExchangeRates = async () => {
    try {
        const response = await axios.get(EXCHANGE_RATE_API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error;
    }
};

/**
 * Convert an amount from one currency to another.
 * @param {number} amount - The amount to convert.
 * @param {string} fromCurrency - The currency to convert from.
 * @param {string} toCurrency - The currency to convert to.
 * @returns {Promise<number>} The converted amount.
 */
const convertCurrency = async (amount, fromCurrency, toCurrency) => {
    const rates = await fetchExchangeRates();
    const fromRate = rates.rates[fromCurrency];
    const toRate = rates.rates[toCurrency];

    if (!fromRate || !toRate) {
        throw new Error('Invalid currency provided');
    }

    const convertedAmount = (amount / fromRate) * toRate;
    return convertedAmount;
};

module.exports = {
    fetchExchangeRates,
    convertCurrency,
};