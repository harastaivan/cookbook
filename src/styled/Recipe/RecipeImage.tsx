import styled from 'styled-components';

export default styled.img`
    width: 100%;
    position: relative;
    top: -40px;
    z-index: -1;

    @media (min-width: 768px) {
        top: -50%;
    }
`;
