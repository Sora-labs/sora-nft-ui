import { createContext, useEffect, useState } from "react"

interface IThemeContext {
    dark: boolean;
    changeDark: (v: boolean) => void;
}

const defaultTheme = {
    dark: false,
    changeDark: (value: boolean) => {},
}

export const ThemeContext = createContext<IThemeContext>(defaultTheme)

const ThemeContextProvider = ({children} : any) => {
    const [dark, setDark] = useState(localStorage['dark'] || "false")
    
    const changeDark = (value: boolean) => {
        localStorage['dark'] = value
        setDark(!dark)
    }

    useEffect(() => {
        if(JSON.parse(dark)) 
            return document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('dark')
    }, [dark])

    return (
        <ThemeContext.Provider value={{ dark, changeDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider