import { quizList } from "@/Data/quizList"
import { AnswersContext } from "@/contexts/answersContext"
import { CountContext } from "@/contexts/countContext"
import { useContext, useState } from "react"
import { Reveal } from "./Reveal"

export const RightSide = ()=> {
    const countCtx = useContext(CountContext)
    const correctCtx = useContext(AnswersContext)

    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
    const [blockButton, setBlockButton] = useState<boolean>(false)

    const handleAnswerButton = (id :number)=> {
        if (countCtx?.count === undefined) return
            if(quizList[countCtx?.count].answers[id] === quizList[countCtx.count].answer) {
                correctCtx?.setCorrect(correctCtx.correct + 1)
                setIsCorrect(true)
            } else {
                setIsCorrect(false)
            }
            setBlockButton(true)

            setTimeout(()=>
            setBlockButton(false)
            ,
            500
            )

            setTimeout(()=>
            setIsCorrect(null)
            ,
            500
            )
            setTimeout(()=>
            countCtx.setCount(countCtx.count + 1)
            ,
            500
            )
        }
        
        console.log(isCorrect)
        
        const handleResetButton = ()=> {
        correctCtx?.setCorrect(0)
        countCtx?.setCount(-1)
    }
    
    return(
        <section className="lg:px-16 lg:py-12">
            {countCtx?.count === -1 && 

                <div className="h-full w-full flex items-center justify-center">
                    <Reveal>
                        <button onClick={()=>countCtx.setCount(countCtx.count + 1)} className="text-zinc-100 m-10 font-bold px-10 py-4 text-xl md:text-3xl rounded-full bg-teal-500 shadow-md shadow-teal-500 hover:shadow-xl hover:shadow-teal-400 transition-all duration-500">Começar quiz</button>
                    </Reveal>
                </div>
            }

            {countCtx?.count !== undefined && countCtx.count >= 0 && countCtx.count < quizList.length &&
                <div className="h-full w-full  relative flex flex-col items-center justify-center">
                    <h2 className="absolute top-0 text-teal-500 text-center text-xl md:text-2xl lg:text-4xl py-2 md:border-b-2 border-b border-teal-500 hidden lg:block">Selecione uma resposta abaixo</h2>
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-6 mb-2 mt-6 lg:mt-0">
                            {quizList[countCtx.count].answers.map((item, id)=>(
                                <button disabled={blockButton} key={id} onClick={()=>handleAnswerButton(id)} className={
                                    `w-auto lg:px-32 xl:px-48 md:px-48 px-24 py-3 rounded-md text-white cursor-pointer font-semibold hover:text-teal-500 hover:bg-zinc-200 transition-all duration-200 disabled:cursor-default
                                    ${isCorrect === null && "bg-teal-500"}
                                    ${isCorrect === true && "bg-green-500"}
                                    ${isCorrect === false && "bg-red-500"}
                                    `}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </Reveal>
                </div>
            }
            {countCtx?.count !== undefined && countCtx.count > quizList.length - 1 && 
                <div className="h-full w-full flex items-center justify-center">
                    <button onClick={handleResetButton} className="text-zinc-100 font-bold px-10 py-4 text-xl md:text-3xl rounded-full bg-teal-500 shadow-md shadow-teal-500 hover:shadow-xl hover:shadow-teal-400 transition-all duration-500">Reiniciar quiz</button>
                </div>
            }
        </section>
    )
}