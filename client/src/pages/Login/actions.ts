import { type RuleObject } from 'antd/lib/form';
import axios from 'axios';
import { useState } from 'react';
import { baseUrl } from '../../config';

export const passwordValidate = (getFieldsValue: string): RuleObject => {
    if (getFieldsValue.length < 8) {
        return { min: 8, message: 'Password must have a minimum length of 8' };
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(getFieldsValue)) {
        return {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
            message: 'Password must contain at least one lowercase letter, uppercase letter, number, and special character',
        };
    } else {
        return {};
    }
};

export const useLogin = () => {
    const [error] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState(false);
    // const { dispatch } = useAuthContext();

    const login = async (email: string, password: string) => {

        setIsLoading(true);
        const userData = {
            email, password, userType: 'manager',
        };

        const response = await axios.post(`${baseUrl}/users/login`, userData);
        if (response.status === 200) {
            localStorage.setItem('userData', JSON.stringify(response.data));
            // dispatch({ type: 'LOGIN', payload: response.data });
            setIsLoading(false);
        }

    };
    return { login, isLoading, error };
};
export const useForget = () => {
    const [error] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState(false);
    const forgetPassword = async (email: string) => {
        setIsLoading(true);
        const userData = {
            email,
        };
        const response = await axios.post(`${baseUrl}/users/forget`, userData);
        if (response.status === 200) {
            setIsLoading(false);
        }

    };
    return { forgetPassword, isLoading, error };
};
