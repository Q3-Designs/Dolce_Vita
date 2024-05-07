import react, {useState} from 'react'


interface Props {
    text: {
        name:string,
        description: string
    }[]
}

const Accordion: React.FC<Props> = ({text}) => {

    const [expandedIndices, setExpandedIndices] =
    useState<number[]>([])

    const [isHovered, setIsHovered] =
     useState<number | null>(null)

     function

    return (
        <section>

        </section>
    )
}