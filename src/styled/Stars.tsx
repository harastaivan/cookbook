import styled from 'styled-components'

type Props = {
    score: number
    primaryColor: string
    secondaryColor: string
    starSize: number
}

// Source: https://codepen.io/FredGenkin/pen/eaXYGV

const Stars = styled.div<Props>`
    --percent: ${(props) => props.score}%;

    display: inline-block;
    font-size: ${(props) => props.starSize}px;
    font-family: Times;
    line-height: 1;

    &::before {
        content: '★★★★★';
        letter-spacing: 3px;
        background: linear-gradient(
            90deg,
            ${(props) => props.primaryColor} var(--percent),
            ${(props) => props.secondaryColor} var(--percent)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export default Stars
