"use client"

import { LeftSide } from "@/components/LeftSide"
import { RightSide } from "@/components/RightSide"
import { AnswersProvider } from "@/contexts/answersContext"
import { CountProvider } from "@/contexts/countContext"

const Page = ()=> {
  return(
    <div className="">
      <CountProvider>
        <AnswersProvider>
          <div className="w-screen h-screen grid grid-cols-2">
            <LeftSide/>
            <RightSide/>
          </div>
        </AnswersProvider>
      </CountProvider>
    </div>
  )
}

export default Page