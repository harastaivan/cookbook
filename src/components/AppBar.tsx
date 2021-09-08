import { AppBar, Toolbar } from '@material-ui/core'
import { useHistory } from 'react-router'
import { addRecipe } from '../links'
import Button from '../styled/AppBar/Button'
import Title from '../styled/AppBar/Title'
import AddIcon from '../styled/AppBar/AddIcon'

type Props = {
    title: string
}

const AppBarComponent: React.FC<Props> = ({ title }: Props) => {
    const history = useHistory()

    const goToAddRecipe = () => {
        history.push(addRecipe)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Title variant="h6">{title}</Title>
                <Button color="secondary" onClick={goToAddRecipe}>
                    <AddIcon />
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarComponent
