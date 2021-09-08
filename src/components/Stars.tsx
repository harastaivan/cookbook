import Stars from '../styled/Stars'

type Props = {
    score: number // range 0 - 100
    primaryColor: string
    secondaryColor: string
}

const StarsComponent: React.FC<Props> = ({ score, primaryColor, secondaryColor }: Props) => {
    return (
        <Stars
            score={score}
            secondaryColor={secondaryColor}
            primaryColor={primaryColor}
            starSize={60}
            aria-label={`Rating of this product is ${score}%.`}
        />
    )
}

export default StarsComponent
