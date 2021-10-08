import Stars from '../styled/Stars';

type Props = {
    score: number; // range 0 - 100
    primaryColor: string;
    secondaryColor: string;
    size?: string;
};

const StarsComponent: React.FC<Props> = ({ score, primaryColor, secondaryColor, size = '1.8rem' }: Props) => {
    return (
        <Stars
            score={score}
            secondaryColor={secondaryColor}
            primaryColor={primaryColor}
            starSize={size}
            aria-label={`Rating of this product is ${score}%.`}
        />
    );
};

export default StarsComponent;
