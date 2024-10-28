// src/api/passwordService.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000/passwords';

export const addPassword = async (password: string) => {
    try {
        const response = await axios.post(API_URL, { password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getPasswords = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deletePassword = async (id: string) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw error.response.data;
    }
};

export const updatePassword = async (id: string, password: string) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, { password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};