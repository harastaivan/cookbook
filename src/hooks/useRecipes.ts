import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { getRecipes } from '../api/recipes'
import { SimpleRecipe } from '../types'

type UseRecipes = {
    loading: boolean
    error: string | null
    recipes: SimpleRecipe[]
}

// Random score between 20-80
const randomizeScore = (recipe: SimpleRecipe): SimpleRecipe => {
    return {
        ...recipe,
        score: 20 + Math.floor(Math.random() * 60),
    }
}

const useRecipes = (): UseRecipes => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [recipes, setRecipes] = useState<SimpleRecipe[]>([])

    const loadRecipes = async () => {
        setLoading(true)
        setError(null)
        try {
            const recipes = await getRecipes()
            const adjustedRecipes = recipes.map(randomizeScore)
            setRecipes(adjustedRecipes)
        } catch (err) {
            setError((err as AxiosError).message)
        }
        setLoading(false)
    }

    useEffect(() => {
        loadRecipes()
    }, [])

    return {
        loading,
        error,
        recipes,
    }
}

export default useRecipes
