import axios from 'axios';

const API_BASE_URL = 'https://app.ej-gaming.com/api/User';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const signIn = (params) => {
    return api.get(`/signIn`,{params});
};
