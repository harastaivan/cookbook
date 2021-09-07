import React from 'react'
import { Link } from 'react-router-dom'
import { getRecipe } from './links'

const Recipes = () => {
    return (
        <div>
            Recipes
            <Link to={getRecipe('some recipe')}>Recipe</Link>
        </div>
    )
}

export default Recipes
