import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import amber from '@material-ui/core/colors/amber'
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: amber,
    red,
    green,
    grey,
    amber,
  },
})

window.theme = theme

export default theme
