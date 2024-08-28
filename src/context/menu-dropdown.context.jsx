import { createContext, useState } from "react";

export const MenuDropdownContext = createContext({
    isMenuOpen: false,
    setIsMenuOpen: () => {}
})

export const MenuDropdownProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const value = {isMenuOpen, setIsMenuOpen}

    return <MenuDropdownContext.Provider value={value}>{children}</MenuDropdownContext.Provider>
}