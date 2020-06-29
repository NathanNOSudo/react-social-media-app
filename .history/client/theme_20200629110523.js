import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#5c67a3',
      main: '#002642',
      dark: '#840032',
      contrastText: '#e5dada',
    },
    secondary: {
      light: '#e5dada',
      main: '#e59500',
      dark: '#e59500',
      contrastText: '#000',
    },
      openTitle: '#002642',
      protectedTitle: pink['400'],
      type: 'light'
    }
  })

  export default theme