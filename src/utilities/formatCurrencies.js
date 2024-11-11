/**
 * 
 * @param {INR,EUR,USE etc.} currency 
 * @param {The amount to be formatted} amount 
 * @returns 
 */


const formatAmount = (currency, amount) => {
    let formattedCurrency = null;
    switch (currency) {
        case 'INR': formattedCurrency = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
            break;
        case 'EUR': formattedCurrency = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
            break;
        case 'USD': formattedCurrency = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
            break;
        default: console.log(`Currency: ${currency} not found!`);
    }

    return formattedCurrency;
}

export default formatAmount;