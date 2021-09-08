import { Link } from 'react-router-dom'
import useRecipes from '../hooks/useRecipes'
import { getRecipe } from '../links'

const Recipes = () => {
    const { loading, error, recipes } = useRecipes()

    return (
        <div>
            <h1>Recipes</h1>
            {loading && 'Loading...'}
            {!loading && error && 'Error' + error}
            {!loading && !error && (
                <ul>
                    {recipes.length &&
                        recipes.map((recipe) => {
                            return (
                                <li>
                                    <Link to={getRecipe(recipe.id)}>
                                        <pre>{JSON.stringify(recipe)}</pre>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
            )}
        </div>
    )
}

export default Recipes
