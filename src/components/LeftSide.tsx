import { quizList } from "@/Data/quizList"
import { AnswersContext } from "@/contexts/answersContext"
import { CountContext } from "@/contexts/countContext"
import { useContext } from "react"
import { Reveal } from "./Reveal"

export const LeftSide = ()=> {
    const countCtx = useContext(CountContext)
    const correctCtx = useContext(AnswersContext)
    
    return(
        <section className="w-full h-full flex flex-col items-center justify-center bg-teal-500 lg:px-16 lg:py-12 text-zinc-50">
            {countCtx?.count === -1 &&
                <Reveal>
                    <div className="container mx-auto flex flex-col items-center justify-center gap-16">
                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold text-center px-2">Quiz de Geografia</h1>
                        <div className="lg:w-80 lg:h-80 md:h-72 md:w-72 w-60 h-60 rounded-full bg-cover bg-center bg-[url(https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/28-09-2020_NICA-846353_GA75_flags.jpg/image560x340cropped.jpg)]"></div>
                    </div>
                </Reveal> 
            }
            {countCtx?.count !== undefined && countCtx.count >= 0 && countCtx.count < quizList.length &&
                <div className="h-full w-full flex relative flex-col items-center justify-center">
                        <span className="absolute top-0 text-3xl font-semibold border-b-2 py-2">Pergunta {quizList[countCtx.count].id}/{quizList.length}</span>
                    <Reveal>
                        <h2 className="md:text-4xl text-2xl sm:text-3xl font-bold text-center mt-20 lg:mt-0">{quizList[countCtx.count].question}</h2>
                    </Reveal>
                    <Reveal>
                        <div className={`md:w-80 md:h-60 h-60 w-60 md:py-8 py-12  flex items-center justify-center`}>
                            <img className="w-full h-full" src={quizList[countCtx.count].src} alt="" />
                        </div>
                    </Reveal>
                </div>
            }

            {countCtx?.count !== undefined && countCtx.count > quizList.length - 1 && 
            <div className="container mx-auto relative h-full w-full flex flex-col items-center justify-center gap-16">
                <span className="absolute top-0 text-3xl md:text-5xl font-semibold border-b-2 py-2 text-center mt-4">Você acertou {correctCtx?.correct}/{quizList.length}</span>
                {correctCtx?.correct !== undefined && correctCtx.correct / quizList.length > 0.5 &&
                    <div className="lg:h-80 lg:w-80 md:h-60 md:w-60 h-52 w-52 bg-cover bg-center bg-[url('https://kitdepontos.com.br/wp-content/uploads/2016/09/pack-de-beats-palminha-claps-funk-kitdepontos.com_.br_.png')]">
                    
                    </div>
                }
                {correctCtx?.correct !== undefined && correctCtx.correct / quizList.length < 0.5 &&
                    <div className="lg:w-80 lg:h-80 md:h-60 md:w-60 h-52 w-52 bg-contain bg-no-repeat mt-4 bg-center bg-[url('https://getmorevocab.com/wp-content/uploads/2019/07/samuel-3898008_1920-e1635803288237.png')]">
                    
                    </div>
                }
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-center">
                    {correctCtx?.correct !== undefined && correctCtx.correct / quizList.length > 0.5 && 'Parabéns!'}
                    {correctCtx?.correct !== undefined && correctCtx.correct / quizList.length < 0.5 && 'Precisa Melhorar'}
                </h1>
            </div>
            }
        </section>
    )
}