import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import theme from "./theme"

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
</BrowserRouter>
  
)














// - createTheme = Design rules banana.
// - theme = Design rules store karna.
// - export default = Doosri files ko theme dena.
// - ThemeProvider = Theme ko application par apply karna.