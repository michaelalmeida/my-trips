import { useState, useEffect } from 'react';

interface IUseLocalStorageProps<T> {
    key: string;
    defaultValue: T;
}

const useLocalStorage = <T>({ key, defaultValue }: IUseLocalStorageProps<T>) => {
    const [value, setValue] = useState(() => {
        let currentValue: T;

        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
        } catch (error) {
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return { value, setValue };
};

export default useLocalStorage;
