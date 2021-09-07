export const getRecipe = (id: string) => `/recipe/${id}`

export const root = '/'
export const recipes = '/recipes'
export const recipe = getRecipe(':id')
export const addRecipe = '/add-recipe'
