import { createContext, useEffect, useState } from "react"

interface IThemeContext {
    dark: boolean;
    toggleDark?: () => void;
}

const defaultTheme = {
    dark: false
}

export const ThemeContext = createContext<IThemeContext>(defaultTheme)

const ThemeContextProvider = ({children} : any) => {
    const [dark, setDark] = useState(localStorage['dark'] || false)
    
    const toggleDark = () => {
        if (!JSON.parse(localStorage.dark)) {
            localStorage['dark'] = true
            document.documentElement.classList.add('dark')
        } else {
            localStorage['dark'] = false
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <ThemeContext.Provider value={{ dark, toggleDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider