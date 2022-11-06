import { createContext, useEffect, useReducer, useState } from "react"

var LargeScreenContext = createContext(true)

function LargeScreenProvider({ children }) {
    // const [largeScreen, setLargeScreen] = useState(true)
    // const useLargeScreenSize = () => {
        // function handleResize() {
        //     setLargeScreen(window.matchMedia("(min-width: 992px)").matches)
        //     console.log("Screen is large: " + window.matchMedia("(min-width: 992px)").matches)
        // }
        function handleResize(a, b) {
            console.log("LargeScreenReducer: state=" + a)
            console.log("LargeScreenReducer: action=" + b)
            console.log("Screen is large: " + window.matchMedia("(min-width: 992px)").matches)
            return window.matchMedia("(min-width: 992px)").matches
        }
        const [largeScreen, doLargeScreen] = useReducer(handleResize, true)
        useEffect(() => {
            const resizeListener = window.addEventListener("resize", () => doLargeScreen("DO YOUR JOB"))

            return () => window.removeEventListener("resize", resizeListener)
        })
    // }
    // useLargeScreenSize()

    return (
        <LargeScreenContext.Provider value={largeScreen}>
            {children}
        </LargeScreenContext.Provider>
    )
}

export { LargeScreenContext, LargeScreenProvider }