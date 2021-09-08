import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default styled(Link)`
    display: block;
    border-top: 3px solid #00000010;

    &:first-child {
        border-top: none;
    }
`
