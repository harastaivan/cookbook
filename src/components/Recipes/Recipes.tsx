import useRecipes from '../../hooks/useRecipes'
import Wrapper from '../../styled/Recipes/Wrapper'
import Spinner from '../../components/Spinner'
import Recipe from './Recipe'

const Recipes = () => {
    const { loading, error, recipes } = useRecipes()

    return (
        <Wrapper>
            {loading && <Spinner />}
            {!loading && error && 'Error' + error}
            {!loading && !error && <div>{recipes.length && recipes.map((recipe) => <Recipe {...recipe} />)}</div>}
        </Wrapper>
    )
}

export default Recipes
