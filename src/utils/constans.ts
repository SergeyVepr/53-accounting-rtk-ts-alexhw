
export const BASE_URL = 'https://webaccounting.herokuapp.com';

export const encryptedToken = (userName: string, password: string) => {
  return `Basic ${btoa(`${userName}:${password}`)}`;
}