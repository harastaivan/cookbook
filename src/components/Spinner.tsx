import { CircularProgress } from '@material-ui/core'
import SpinnerWrapper from '../styled/Spinner/SpinnerWrapper'

const Spinner = () => {
    return (
        <SpinnerWrapper>
            <CircularProgress color="secondary" />
        </SpinnerWrapper>
    )
}

export default Spinner
