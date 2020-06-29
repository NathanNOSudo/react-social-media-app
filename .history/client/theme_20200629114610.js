import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    "palette":{"common":{"black":"rgba(255, 210, 63, 1)","white":"rgba(155, 93, 229, 1)"},"background":{"paper":"rgba(2, 4, 15, 1)","default":"rgba(20, 33, 61, 1)"},"primary":{"light":"rgba(251, 101, 65, 1)","main":"rgba(95, 15, 64, 1)","dark":"rgba(63, 104, 28, 1)","contrastText":"rgba(255, 187, 0, 1)"},"secondary":{"light":"rgba(49, 169, 184, 1)","main":"rgba(139, 87, 42, 1)","dark":"rgba(37, 128, 57, 1)","contrastText":"rgba(248, 231, 28, 1)"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(255, 4, 99, 1)","secondary":"rgba(251, 86, 7, 1)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}})

  export default theme