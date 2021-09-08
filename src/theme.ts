import { createTheme } from '@material-ui/core/styles'
import { blue, white } from './colors'

const theme = createTheme({
    palette: {
        primary: {
            main: white,
        },
        secondary: {
            main: blue,
        },
    },
})

export default theme
