const fetchExchangeRate = async () => {
    try {
        const response = await fetch('https://api.exchangerate.host/latest?base=USD&symbols=KES');
        const data = await response.json();
        return data.rates.KES;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        return null;
    }
};

const convertUSDtoKES = async (amount) => {
    const exchangeRate = await fetchExchangeRate();
    if (exchangeRate) {
        return amount * exchangeRate;
    }
    return null;
};

const convertKEStoUSD = async (amount) => {
    const exchangeRate = await fetchExchangeRate();
    if (exchangeRate) {
        return amount / exchangeRate;
    }
    return null;
};

export { convertUSDtoKES, convertKEStoUSD };