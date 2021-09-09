import { useParams } from 'react-router'
import Recipe from '../components/RecipeDetail/Recipe'
import Spinner from '../components/Spinner'
import useRecipe from '../hooks/useRecipe'

type Params = {
    id: string
}

const RecipeDetail = () => {
    const { id } = useParams<Params>()
    const { loading, error, recipe } = useRecipe(id)

    return (
        <>
            {loading && <Spinner />}
            {!loading && error && 'Error' + error}
            {!loading && !error && recipe && <Recipe {...recipe} />}
        </>
    )
}

export default RecipeDetail
