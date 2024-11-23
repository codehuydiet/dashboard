import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClick, setIsClick] = useState(initialState);
    const handleClick = (clicked) => {
        setIsClick({ ...initialState, [clicked]: true });
    }
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState("#03C9D7")
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSetting, setThemeSetting] = useState(false)
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSetting(false)
    }
    const setColor = (e) => {
        setCurrentColor(e);
        localStorage.setItem('colorMode', e);
        setThemeSetting(false)
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClick,
                setIsClick,
                handleClick,
                screenSize,
                setScreenSize,
                setMode, setColor,
                currentColor, currentMode,
                themeSetting, setThemeSetting
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);