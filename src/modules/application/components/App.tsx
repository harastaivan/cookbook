import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Login } from 'modules/auth';

import config from 'config';
import RecipesPage from 'pages/Recipes';
import RecipeDetail from 'pages/RecipeDetail';
import AddRecipe from 'pages/AddRecipe';

const routes = [
    {
        path: config.routes.recipes,
        render: () => <RecipesPage />,
    },
    {
        path: config.routes.recipe,
        render: () => <RecipeDetail />,
    },
    {
        path: config.routes.addRecipe,
        render: () => <AddRecipe />,
    },
    // @use-auth-module-begin
    {
        path: config.routes.auth,
        component: Login,
    },
    // @use-auth-module-end
    {
        render: () => <Redirect from="/" to={config.routes.recipes} />,
    },
];

const App = () => {
    return (
        <Switch>
            {routes.map((route, index) => (
                // We ensure same order of array items
                // eslint-disable-next-line react/no-array-index-key
                <Route {...route} key={index} />
            ))}
        </Switch>
    );
};

export default App;
