export const LocalStorage = {
  setData: <T>(data: T, key: string) => {
    const json = JSON.stringify(data);
    localStorage.setItem(key, json);
  },
  getData: <T>(key: string): T | null => {
    const json = localStorage.getItem(key);
    return json ? JSON.parse(json) : null;
  },
  clear: (): void => localStorage.clear(),
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
};