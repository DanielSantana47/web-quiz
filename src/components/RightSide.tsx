import { quizList } from "@/content/quizList"
import { AnswersContext } from "@/contexts/answersContext"
import { CountContext } from "@/contexts/countContext"
import { useContext, useState } from "react"

export const RightSide = ()=> {
    const countCtx = useContext(CountContext)
    const correctCtx = useContext(AnswersContext)

    const [isCorrect, setIsCorrect] = useState(undefined)

    const handleAnswerButton = (id: number)=> {
        if (countCtx?.count === undefined) return
            if(quizList[countCtx?.count].answers[id] === quizList[countCtx.count].answer) {
                correctCtx?.setCorrect(correctCtx.correct + 1)
            }

            setTimeout(()=>
                countCtx.setCount(countCtx.count + 1),
                400
            )
    }
    
    return(
        <section className="px-16 py-12">
            {countCtx?.count === -1 && 
                <div className="h-full w-full flex items-center justify-center">
                    <button onClick={()=>countCtx.setCount(countCtx.count + 1)} className="text-zinc-100 font-bold px-10 py-4 text-3xl rounded-full bg-teal-500 shadow-md shadow-teal-500 hover:shadow-xl hover:shadow-teal-400 transition-all duration-500">Começar quiz</button>
                </div>
            }

            {countCtx?.count !== undefined && countCtx.count >= 0 && countCtx.count < quizList.length &&
                <div className="h-full w-full  relative flex flex-col items-center justify-center">
                    <h2 className="absolute top-0 text-teal-500 text-4xl py-2 border-b-2 border-teal-500">Selecione uma resposta abaixo</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {quizList[countCtx.count].answers.map((item, id)=>(
                            <div key={id} onClick={()=>handleAnswerButton(id)} className={`px-56 py-3 rounded-md ${isCorrect === true && 'bg-green-500'} ${isCorrect === false && 'bg-red-500'} bg-teal-500 text-white cursor-pointer font-semibold hover:text-teal-500 hover:bg-zinc-200 transition-all duration-200`}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            }
            {countCtx?.count !== undefined && countCtx.count > quizList.length - 1 && 
                <div className="h-full w-full flex items-center justify-center">
                    <button onClick={()=>countCtx.setCount(-1)} className="text-zinc-100 font-bold px-10 py-4 text-3xl rounded-full bg-teal-500 shadow-md shadow-teal-500 hover:shadow-xl hover:shadow-teal-400 transition-all duration-500">Reiniciar quiz</button>
                </div>
            }
        </section>
    )
}