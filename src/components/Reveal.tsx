import { motion, useAnimation, useInView } from "framer-motion"
import { type } from "os"
import { useEffect, useRef } from "react"


type Props = {
    children: JSX.Element,
    width?: "fit-content" | "full"
}

export const Reveal = ({children, width = "fit-content"}: Props)=> {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})
    const mainControls = useAnimation()

    useEffect(()=> {
        if (isInView) {
            mainControls.start("visible")
        }
        else { mainControls.start("hidden")}
    }, [isInView])
    return(
        <div ref={ref} className={`relative overflow-hidden w-${width}`}>
            <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
                duration: 0.5, delay: 0.25
            }}
            >
                <div>{children}</div>
            </motion.div>
        </div>
    )
}