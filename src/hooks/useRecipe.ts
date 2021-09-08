import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { getRecipe } from '../api/recipes'
import { Recipe } from '../types'

type UseRecipe = {
    loading: boolean
    error: string | null
    recipe: Recipe | null
}

const useRecipe = (id: string): UseRecipe => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [recipe, setRecipe] = useState<Recipe | null>(null)

    const loadRecipe = async (id: string) => {
        setLoading(true)
        setError(null)
        try {
            const recipe = await getRecipe(id)
            setRecipe(recipe)
        } catch (err) {
            setError((err as AxiosError).message)
        }
        setLoading(false)
    }

    useEffect(() => {
        loadRecipe(id)
    }, [id])

    return {
        loading,
        error,
        recipe,
    }
}

export default useRecipe
