import { quizList } from "@/Data/quizList"
import { AnswersContext } from "@/contexts/answersContext"
import { CountContext } from "@/contexts/countContext"
import { useContext, useState } from "react"
import { Reveal } from "./Reveal"

export const RightSide = ()=> {
    const countCtx = useContext(CountContext)
    const correctCtx = useContext(AnswersContext)

    const [isCorrect, setIsCorrect] = useState<number | null>(null)

    const handleAnswerButton = (id: number)=> {
        if (countCtx?.count === undefined) return
            if(quizList[countCtx?.count].answer === id) {
                correctCtx?.setCorrect(correctCtx.correct + 1)
            }
            setIsCorrect(id)
            
            setTimeout(()=>
            countCtx.setCount(countCtx.count + 1),
            400
            )
    }

    console.log(isCorrect)

    const handleResetButton = ()=> {
        correctCtx?.setCorrect(0)
        countCtx?.setCount(-1)
    }
    
    return(
        <section className="px-16 py-12">
            {countCtx?.count === -1 && 

                <div className="h-full w-full flex items-center justify-center">
                    <Reveal>
                        <button onClick={()=>countCtx.setCount(countCtx.count + 1)} className="text-zinc-100 m-10 font-bold px-10 py-4 text-3xl rounded-full bg-teal-500 shadow-md shadow-teal-500 hover:shadow-xl hover:shadow-teal-400 transition-all duration-500">Começar quiz</button>
                    </Reveal>
                </div>
            }

            {countCtx?.count !== undefined && countCtx.count >= 0 && countCtx.count < quizList.length &&
                <div className="h-full w-full  relative flex flex-col items-center justify-center">
                    <h2 className="absolute top-0 text-teal-500 text-4xl py-2 border-b-2 border-teal-500">Selecione uma resposta abaixo</h2>
                    <Reveal>
                        <div className="grid grid-cols-1 gap-6">
                            {quizList[countCtx.count].answers.map((item, id)=>(
                                <div key={id} onClick={()=>handleAnswerButton(id)} className={
                                    `px-56 py-3 rounded-md bg-teal-500 text-white cursor-pointer font-semibold hover:text-teal-500 hover:bg-zinc-200 transition-all duration-200
                                    ${isCorrect !== null && isCorrect === id && isCorrect === quizList[countCtx.count].answer && 'bg-green-500'} 
                                    ${isCorrect !== null && isCorrect === id && isCorrect !== quizList[countCtx.count].answer && 'bg-red-500'}  
                                    `}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            }
            {countCtx?.count !== undefined && countCtx.count > quizList.length - 1 && 
                <div className="h-full w-full flex items-center justify-center">
                    <button onClick={handleResetButton} className="text-zinc-100 font-bold px-10 py-4 text-3xl rounded-full bg-teal-500 shadow-md shadow-teal-500 hover:shadow-xl hover:shadow-teal-400 transition-all duration-500">Reiniciar quiz</button>
                </div>
            }
        </section>
    )
}