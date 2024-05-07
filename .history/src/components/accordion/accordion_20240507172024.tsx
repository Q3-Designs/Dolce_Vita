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

    const []

    return (
        <section>

        </section>
    )
}