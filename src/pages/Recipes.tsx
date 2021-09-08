import { Typography } from '@material-ui/core'
import ReadingTimeIcon from '@material-ui/icons/Schedule'

import { getRecipe } from '../links'
import { white, purple } from '../colors'
import { SimpleRecipe } from '../types'
import useRecipes from '../hooks/useRecipes'
import AppBar from '../components/AppBar'
import Stars from '../components/Stars'
import Spinner from '../components/Spinner'
import recipeImage from '../images/ackee.png'

import Layout from '../styled/Layout'
import Link from '../styled/Recipes/Link'
import RecipeWrapper from '../styled/Recipes/RecipeWrapper'
import Image from '../styled/Recipes/Image'
import TextWrapper from '../styled/Recipes/TextWrapper'
import Title from '../styled/Recipes/Title'
import ReadingTime from '../styled/Recipes/ReadingTime'
import Wrapper from '../styled/Recipes/Wrapper'

const Recipe: React.FC<SimpleRecipe> = ({ id, name, duration, score }: SimpleRecipe) => {
    return (
        <Link to={getRecipe(id)}>
            <RecipeWrapper key={id}>
                <Image src={recipeImage} />
                <TextWrapper>
                    <Title variant="h5" color="secondary">
                        {name}
                    </Title>
                    <Stars score={score} primaryColor={purple} secondaryColor={white} />
                    <ReadingTime>
                        <ReadingTimeIcon />
                        <Typography>{duration} min.</Typography>
                    </ReadingTime>
                </TextWrapper>
            </RecipeWrapper>
        </Link>
    )
}

const Recipes = () => {
    const { loading, error, recipes } = useRecipes()

    return (
        <Layout>
            <AppBar title="Recepty" />
            <Wrapper>
                {loading && <Spinner />}
                {!loading && error && 'Error' + error}
                {!loading && !error && <div>{recipes.length && recipes.map((recipe) => <Recipe {...recipe} />)}</div>}
            </Wrapper>
        </Layout>
    )
}

export default Recipes
