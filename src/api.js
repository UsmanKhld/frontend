import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

console.log(import.meta.env.VITE_REACT_API_URL); // Should log your base URL


export const refreshToken = async (refreshToken) => {
    const response = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/token/refresh/`, {refresh: refreshToken});
    return response.data;
}

const api = axios.create({
    baseURL: 'https://ec8xky1urg.execute-api.us-west-2.amazonaws.com',
    headers: {
        "Content-Type": "application/json",
    }
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token)
        {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

api.interceptors.response.use(response => response, async error => {
    const {response} = error;
    if (response.status === 401 && response.data.code === 'token-not_valid') {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
            try {
                const {access} = await refreshToken(refreshToken);
                localStorage.setItem('access_token', access);
                error.config.headers['Authorization'] = `Bearer ${access}`;
                return axios(error.config);
            } catch (err) {
                console.error('Refresh token failed', err)
            }
        }
    }
    return Promise.reject(error)
});

export default api