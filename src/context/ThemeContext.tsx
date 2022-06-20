import { createContext, useEffect, useState } from "react"

interface IThemeContext {
    dark: boolean;
    toggleDark: () => void;
}

const defaultTheme = {
    dark: false,
    toggleDark: () => {},
}

export const ThemeContext = createContext<IThemeContext>(defaultTheme)

const ThemeContextProvider = ({children} : any) => {
    const [dark, setDark] = useState(localStorage['dark'] || false)
    
    const toggleDark = () => {
        if (!JSON.parse(localStorage.dark ?? "false")) {
            console.log("light mode")
            localStorage['dark'] = true
        }
        else
            localStorage['dark'] = false
        setDark(!dark)
    }

    useEffect(() => {
        console.log("dark theme", dark)
        if(dark) 
            return document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('dark')
    }, [dark])

    return (
        <ThemeContext.Provider value={{ dark, toggleDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider