import { Typography } from '@material-ui/core'
import ReadingTimeIcon from '@material-ui/icons/Schedule'

import { getRecipe } from '../../links'
import { white, purple } from '../../colors'
import { SimpleRecipe } from '../../types'
import Stars from '../../components/Stars'
import recipeImage from '../../images/ackee.png'

import Link from '../../styled/Recipes/Link'
import RecipeWrapper from '../../styled/Recipes/RecipeWrapper'
import Image from '../../styled/Recipes/Image'
import TextWrapper from '../../styled/Recipes/TextWrapper'
import Title from '../../styled/Recipes/Title'
import ReadingTime from '../../styled/Recipes/ReadingTime'

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

export default Recipe
