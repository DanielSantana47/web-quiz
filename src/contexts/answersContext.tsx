import { ReactNode, createContext, useState } from "react"

type Props = {
    correct: number,
    setCorrect: (n: number)=> void
}

export const AnswersContext = createContext<Props | null>(null)

export const AnswersProvider = ({children}: {children: ReactNode})=> {
    const [correct, setCorrect] = useState(0)
    
    return(
        <AnswersContext.Provider value={{correct, setCorrect}}>
            {children}
        </AnswersContext.Provider>
    )
}