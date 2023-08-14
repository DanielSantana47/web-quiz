import { quizList } from "@/Data/quizList"
import { AnswersContext } from "@/contexts/answersContext"
import { CountContext } from "@/contexts/countContext"
import { useContext } from "react"
import { Reveal } from "./Reveal"

export const LeftSide = ()=> {
    const countCtx = useContext(CountContext)
    const correctCtx = useContext(AnswersContext)
    
    return(
        <section className="w-full h-full flex flex-col items-center justify-center bg-teal-500 px-16 py-12 text-zinc-50">
            {countCtx?.count === -1 &&
                <Reveal>
                    <div className="container mx-auto flex flex-col items-center justify-center gap-16">
                        <h1 className="text-7xl font-semibold text-center">Bem-vindo ao quiz de Geografia</h1>
                        <div className="w-80 h-80 rounded-full bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1562917947-859259de851c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1617&q=80)]"></div>
                    </div>
                </Reveal> 
            }
            {countCtx?.count !== undefined && countCtx.count >= 0 && countCtx.count < quizList.length &&
                <div className="h-full w-full flex relative flex-col items-center justify-center">
                        <span className="absolute top-0 text-3xl font-semibold border-b-2 py-2">Pergunta {quizList[countCtx.count].id}/{quizList.length}</span>
                    <Reveal>
                        <h2 className="text-4xl font-bold">{quizList[countCtx.count].question}</h2>
                    </Reveal>
                    <Reveal>
                        <div className={`w-80 h-80 flex items-center justify-center`}>
                            <img className="" src={quizList[countCtx.count].src} alt="" />
                        </div>
                    </Reveal>
                </div>
            }

            {countCtx?.count !== undefined && countCtx.count > quizList.length - 1 && 
            <div className="container mx-auto relative h-full w-full flex flex-col items-center justify-center gap-16">
                <span className="absolute top-0 text-5xl font-semibold border-b-2 py-2">Você acertou {correctCtx?.correct}/{quizList.length}</span>
                {correctCtx?.correct !== undefined && correctCtx.correct / quizList.length > 0.5 &&
                    <div className="w-80 h-80 rounded-full bg-cover bg-center bg-[url('https://img.freepik.com/free-vector/flat-colorful-applause-background_23-2148162466.jpg?w=2000')]">
                    
                    </div>
                }
                {correctCtx?.correct !== undefined && correctCtx.correct / quizList.length < 0.5 &&
                    <div className="w-80 h-80 bg-contain bg-no-repeat bg-center bg-[url('https://getmorevocab.com/wp-content/uploads/2019/07/samuel-3898008_1920-e1635803288237.png')]">
                    
                    </div>
                }
                
                <h1 className="text-7xl font-semibold text-center">
                    {correctCtx?.correct !== undefined && correctCtx.correct / quizList.length > 0.5 && 'Parabéns'}
                    {correctCtx?.correct !== undefined && correctCtx.correct / quizList.length < 0.5 && 'Precisa Melhorar'}
                </h1>
            </div>
            }
        </section>
    )
}