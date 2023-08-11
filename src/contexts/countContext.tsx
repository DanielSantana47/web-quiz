import { ReactNode, createContext, useState } from "react"

type Props = {
    count: number,
    setCount: (n: number)=> void
}

export const CountContext = createContext<Props | null>(null)

export const CountProvider = ({children}: {children: ReactNode})=> {
    const [count, setCount] = useState(-1)
    
    return(
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
}