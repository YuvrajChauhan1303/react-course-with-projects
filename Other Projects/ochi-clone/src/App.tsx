import { ThemeProvider } from "./components/Theme/theme-provider"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
    </ThemeProvider>
  )
}

export default App
