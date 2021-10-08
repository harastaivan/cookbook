import Layout from '../styled/Layout';
import AppBar from '../components/AppBar';
import Recipes from '../components/Recipes/Recipes';

const RecipesPage = () => {
    return (
        <Layout>
            <AppBar title="Recepty" />
            <Recipes />
        </Layout>
    );
};

export default RecipesPage;
