import providers from '../data/data.json';

export const fetchProviders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(providers);
    }, 1000);
  });
};