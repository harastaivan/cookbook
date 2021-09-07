import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import AddRecipe from './AddRecipe'
import { addRecipe, recipe, recipes, root } from './links'
import Recipe from './Recipe'
import Recipes from './Recipes'

function App() {
    return (
        <Router>
            <Switch>
                <Redirect exact from={root} to={recipes} />
                <Route path={recipes}>
                    <Recipes />
                </Route>
                <Route path={recipe}>
                    <Recipe />
                </Route>
                <Route path={addRecipe}>
                    <AddRecipe />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
