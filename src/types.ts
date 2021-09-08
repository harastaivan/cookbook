export type Ingredient = string

export type SimpleRecipe = {
    id: string
    name: string
    duration: number
    score: number
}

export type Recipe = {
    description: string
    ingredients: Ingredient[]
    info: string
} & SimpleRecipe
