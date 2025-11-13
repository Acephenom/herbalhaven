import axios from 'axios';

const EXCHANGE_RATE_API_URL = 'https://api.exchangerate.host/latest';

export const fetchExchangeRates = async () => {
    try {
        const response = await axios.get(EXCHANGE_RATE_API_URL);
        return response.data.rates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error;
    }
};

export const convertCurrency = (amount, fromCurrency, toCurrency, rates) => {
    if (!rates || !rates[fromCurrency] || !rates[toCurrency]) {
        throw new Error('Invalid currency or rates not available');
    }
    const convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
    return convertedAmount.toFixed(2);
};