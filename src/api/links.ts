const API_ENDPOINT = 'https://my-json-server.typicode.com/AckeeCZ/web-task-cookbook-fake-api';

export const recipes = `${API_ENDPOINT}/recipes`;
export const newRecipe = `${API_ENDPOINT}/recipes`;
export const recipe = (id: string) => `${API_ENDPOINT}/recipes/${id}`;
