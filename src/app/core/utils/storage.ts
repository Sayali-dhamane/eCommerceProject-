
export const isBrowser = () => typeof window !== 'undefined';

export const storage = {
    get(key: string) {
        if (!isBrowser()) return null;
        return JSON.parse(localStorage.getItem(key) || 'null');
    },

    set(key: string, value: any) {
        if (!isBrowser()) return;
        localStorage.setItem(key, JSON.stringify(value));
    },

    remove(key: string) {
        if (!isBrowser()) return;
        localStorage.removeItem(key);
    }
};
