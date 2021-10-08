import { useHistory } from 'react-router';
import { Toolbar, Typography } from '@material-ui/core';
import ReadingTimeIcon from '@material-ui/icons/Schedule';
import { Recipe as Props } from '../../types';
import { addRecipe } from '../../links';
import { offWhite, purple, white } from '../../colors';
import recipeImage from '../../images/ackee.png';

import Stars from '../Stars';
import Button from '../../styled/AppBar/Button';
import Title from '../../styled/AppBar/Title';
import AddIcon from '../../styled/AppBar/AddIcon';
import BackButton from '../../styled/AppBar/BackButton';
import BackIcon from '../../styled/AppBar/BackIcon';
import Layout from '../../styled/Layout';
import ReadingTime from '../../styled/Recipes/ReadingTime';
import RecipeImageWrapper from '../../styled/Recipe/RecipeImageWrapper';
import AppBar from '../../styled/Recipe/AppBar';
import RecipeImage from '../../styled/Recipe/RecipeImage';
import Name from '../../styled/Recipe/Name';
import ScoreAndDurationWrapper from '../../styled/Recipe/ScoreAndDurationWrapper';
import Content from '../../styled/Recipe/Content';
import Info from '../../styled/Recipe/Info';
import Ingredients from '../../styled/Recipe/Ingredients';
import Heading from '../../styled/Recipe/Heading';
import Description from '../../styled/Recipe/Description';
import RateThisRecipeWrapper from '../../styled/Recipe/RateThisRecipeWrapper';

const Recipe: React.FC<Props> = ({ name, score, duration, description, ingredients, info }: Props) => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    const goToAddRecipe = () => {
        history.push(addRecipe);
    };

    return (
        <Layout>
            <RecipeImageWrapper>
                <AppBar position="absolute">
                    <Toolbar>
                        <BackButton color="primary" onClick={goBack}>
                            <BackIcon />
                        </BackButton>
                        <Title />
                        <Button color="primary" onClick={goToAddRecipe}>
                            <AddIcon />
                        </Button>
                    </Toolbar>
                </AppBar>
                <RecipeImage src={recipeImage} />
                <Name variant="h5">{name}</Name>
            </RecipeImageWrapper>
            <ScoreAndDurationWrapper>
                <Stars score={score} primaryColor={white} secondaryColor={purple} />
                <ReadingTime>
                    <ReadingTimeIcon />
                    <Typography>{duration} min.</Typography>
                </ReadingTime>
            </ScoreAndDurationWrapper>
            <Content>
                <Info>{info}</Info>
                <Ingredients>
                    <Heading variant="h6" color="secondary">
                        Ingredience
                    </Heading>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li>{ingredient}</li>
                        ))}
                    </ul>
                </Ingredients>
                <Heading variant="h6" color="secondary">
                    Příprava jídla
                </Heading>
                <Description>{description}</Description>
            </Content>
            <RateThisRecipeWrapper>
                <Typography variant="h6">Ohodnoť tento recept</Typography>
                <Stars score={60} primaryColor={white} secondaryColor={offWhite} />
            </RateThisRecipeWrapper>
        </Layout>
    );
};

export default Recipe;
