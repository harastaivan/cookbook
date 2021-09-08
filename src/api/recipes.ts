import axios from 'axios'
import { Recipe, SimpleRecipe } from '../types'
import { /* recipe as recipeUrl, */ newRecipe, recipes as recipesUrl } from './links'
import { getMockedRecipe } from './mocked'

export const getRecipes = async (): Promise<SimpleRecipe[]> => {
    const response = await axios.get(recipesUrl)
    const recipes = response.data

    return recipes
}

// Endpoint doesn't return Recipe but SimpleRecipe
export const getRecipe = async (id: string): Promise<Recipe> => {
    // Use mocked Recipe instead
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getMockedRecipe())
        }, 1000)
    })

    // const response = await axios.get(recipeUrl(id))
    // const recipe = response.data

    // return recipe
}

export const createRecipe = async (recipe: Recipe): Promise<string> => {
    const response = await axios.post(newRecipe, recipe)
    const { id: recipeId } = response.data

    return recipeId
}
