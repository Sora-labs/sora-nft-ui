import { createContext, useState } from "react"

interface IThemeContext {
    dark: boolean;
    toggleDark?: () => void;
}

const ThemeContextProvider = ({children} : any) => {
    const [dark, setDark] = useState(localStorage['theme'] || false)
    const ThemeContext = createContext<IThemeContext>(dark)
    const toggleDark = () => {
            setDark(!dark)
    }
    return (
        <ThemeContext.Provider value={{ dark, toggleDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider