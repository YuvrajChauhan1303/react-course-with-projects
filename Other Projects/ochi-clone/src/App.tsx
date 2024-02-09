import { ThemeProvider } from "./components/Theme/theme-provider"
import Navbar from "./components/Navbar/Navbar"
import Landing from "./components/Landing/Landing"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Landing />
    </ThemeProvider>
  )
}

export default App
