import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { addRecipe, recipe, recipes, root } from './links'
import AddRecipe from './pages/AddRecipe'
import Recipe from './pages/Recipe'
import Recipes from './pages/Recipes'

function App() {
    return (
        <Router>
            <Switch>
                <Route path={recipe}>
                    <Recipe />
                </Route>
                <Route path={addRecipe}>
                    <AddRecipe />
                </Route>
                <Route path={recipes}>
                    <Recipes />
                </Route>
                <Redirect from={root} to={recipes} />
            </Switch>
        </Router>
    )
}

export default App
