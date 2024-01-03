import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <p>Hello</p>
        fdsfjsdlkfjsdf
        <ModeToggle />
      </ThemeProvider>
    </>
  )
}

export default App
