import React from 'react'
import { useParams } from 'react-router'

type Params = {
    id: string
}

const Recipe = () => {
    const { id } = useParams<Params>()

    return <div>Recipe {id}</div>
}

export default Recipe
