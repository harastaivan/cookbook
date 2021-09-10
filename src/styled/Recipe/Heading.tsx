import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export default styled(Typography)`
    margin-top: 1em;
    font-weight: 400;
    @media (min-width: 768px) {
        font-size: 1.4rem;
        font-weight: 500;
    }
`
