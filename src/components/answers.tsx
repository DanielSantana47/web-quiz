type Props = {
    id: number,
    text: string
}

export const Answers = ({id, text}: Props)=> {
    return(
        <div key={id} className="">
            {text}
        </div>
    )
}