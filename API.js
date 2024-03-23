const axios = require('axios');

//Changable Variables for Testing
const baseURL="http://localhost:5000";
const pairAddress="inj17ufy5gqw33t0prwhkwa6ensv0jpj3xfvylgx8j"; 

// Function to fetch Price data by pairAddress
async function getPrice(pairAddress) {
    try {
        const response = await axios.get(baseURL+"/Price/"+pairAddress);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching price data: ' + error.message);
    }
}

// Function to fetch volume data by pairAddress
async function getVolume(pairAddress) {
    try {
        const response = await axios.get(baseURL+"/Volume/"+pairAddress);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching volume data: ' + error.message);
    }
}

// Function to fetch Both
async function fetchData() {
    try {
        const priceData = await getPrice(pairAddress);
        console.log('Price data:', priceData);

        const volumeData = await getVolume(pairAddress);
        console.log('Volume data:', volumeData);
    } catch (error) {
        console.error(error.message);
    }
}

//Sample Function for Testing
fetchData();