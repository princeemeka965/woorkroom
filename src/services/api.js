import axios from "axios"

export const validateEmail = async (payload) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/email/send-otp`, payload);
        return response.data;
    } catch (error) {
        return error
    }
};