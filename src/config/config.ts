import { merge } from 'lodash';

const envConfig = require(`./config.${process.env.REACT_APP_BUILD_ENV}.ts`).default;

const defaults = {
    // default configuration goes here
    appName: process.env.REACT_APP_NAME,
    sentry: {
        // TODO: add PUBLIC 'dsn' of your project here:
        dsn: '',
    },
    api: {
        signIn: '/v1/auth/sign-in',
        me: '/v1/users/me',
        refresh: '/v1/auth/refresh',
    },
    routes: {
        home: '/',
        // @use-auth-module-begin
        auth: '/auth',
        // @use-auth-module-end
        recipes: '/recipes',
        recipe: '/recipe/:id',
        recipeById: (id: string) => `/recipe/${id}`,
        addRecipe: '/add-recipe',
    },
    forms: {
        login: 'loginForm',
    },
};

export default merge(defaults, envConfig);
