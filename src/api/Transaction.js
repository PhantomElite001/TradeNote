import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const createTransaction = async (transactionData) => {
    const response = await axios.post(`${API_BASE_URL}/transactions`, transactionData);
    return response.data;
};

export const getTransactionHistory = async (customerId) => {
    const response = await axios.get(`${API_BASE_URL}/transactions/history/${customerId}`);
    return response.data;
};