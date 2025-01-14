import axios from "axios"

export const lynchpinValidate = async (payload) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/refresh_lynchpin`, payload);
        return response.data;
    } catch (error) {
        return error
    }
}

export const validateEmail = async (payload) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/email/send-otp`, payload);
        return response.data;
    } catch (error) {
        return error
    }
};

export const verifyOTP = async (payload) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/email/verifyOTP`, payload);
        return response.data;
    } catch (error) {
        return error
    }
};

export const createAccount = async (payload) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/create-account`, payload);
        return response.data;
    } catch (error) {
        return error
    }
};

export const loginAccount = async (payload) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login-account`, payload);
        return response.data;
    } catch (error) {
        return error
    }
}