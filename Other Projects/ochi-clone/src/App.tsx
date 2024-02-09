import { ThemeProvider } from "./components/Theme/theme-provider"
import Navbar from "./components/Navbar/Navbar"
import Landing from "./components/Landing/Landing"
import Marquee from "./components/Marquee/marquee"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Landing />
      <Marquee />
    </ThemeProvider>
  )
}

export default App
