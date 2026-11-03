// this is centrl design thmem like a function for reusabel
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette : {
         primary: {
      main: '#6366F1',
    },
    secondary: {
      main: '#EC4899',
    },
  },
    typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
    shape: {
    borderRadius: 10,
  }
})

export default theme
