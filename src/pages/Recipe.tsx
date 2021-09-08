import { useParams } from 'react-router'
import useRecipe from '../hooks/useRecipe'

type Params = {
    id: string
}

const Recipe = () => {
    const { id } = useParams<Params>()
    const { loading, error, recipe } = useRecipe(id)

    return (
        <div>
            <h1>Recipe {id}</h1>
            {loading && 'Loading...'}
            {!loading && error && 'Error' + error}
            {!loading && !error && <pre>{JSON.stringify(recipe)}</pre>}
        </div>
    )
}

export default Recipe
