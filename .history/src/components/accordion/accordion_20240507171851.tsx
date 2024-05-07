import react, {useState} from 'react'


interface Props {
    text: {
        name:string,
        description: string
    }[]
}

const Accordion: React.FC = ({text}) => {

    const [expandedIndices, setExpandedIndices] =
    useState<number[]>([])

    return (
        <section>

        </section>
    )
}