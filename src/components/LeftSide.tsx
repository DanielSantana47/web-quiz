import { quizList } from "@/content/quizList"
import { AnswersContext } from "@/contexts/answersContext"
import { CountContext } from "@/contexts/countContext"
import { useContext } from "react"

export const LeftSide = ()=> {
    const countCtx = useContext(CountContext)
    const correctCtx = useContext(AnswersContext)
    
    return(
        <section className="w-full h-full flex flex-col items-center justify-center bg-teal-500 px-16 py-12 text-zinc-50">
            {countCtx?.count === -1 && 
                <div className="container mx-auto flex flex-col items-center justify-center gap-16">
                    <h1 className="text-7xl font-semibold text-center">Bem-vindo ao quiz de Geografia</h1>
                    <div className="w-80 h-80 rounded-full bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1562917947-859259de851c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1617&q=80)]"></div>
                </div>
            }
            {countCtx?.count !== undefined && countCtx.count >= 0 && countCtx.count < quizList.length &&
                <div className="h-full w-full flex relative flex-col items-center justify-center">
                    <span className="absolute top-0 text-3xl font-semibold border-b-2 py-2">Question {quizList[countCtx.count].id}/{quizList.length}</span>
                    <h2 className="text-4xl font-bold">{quizList[countCtx.count].question}</h2>
                    <div className={`w-80 h-80 flex items-center justify-center`}>
                        <img className="" src={quizList[countCtx.count].src} alt="" />
                    </div>
                </div>
            }

            {countCtx?.count !== undefined && countCtx.count > quizList.length - 1 && 
                <div></div>
            }
        </section>
    )
}