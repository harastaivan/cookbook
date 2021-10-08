import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export default styled(Typography)`
    position: absolute;
    bottom: 0;
    z-index: 10;
    margin: 1.2em 1em;
    color: #ffffff;
    @media (min-width: 768px) {
        margin: 1.2em 5em;
        font-size: 2rem;
    }
`;
