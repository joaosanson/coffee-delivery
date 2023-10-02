import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'

export function App() {
  return <ThemeProvider theme={defaultTheme}></ThemeProvider>
}
