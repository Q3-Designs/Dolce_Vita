import react, {useState} from 'react'


interface Props {
    text: {
        title:string,
        description: string
    }[]
}

const Accordion: React.FC<Props> = ({text}) => {

    const [expandedIndices, setExpandedIndices] =
    useState<number[]>([])

    const [isHovered, setIsHovered] =
     useState<number | null>(null)

     function handleMouseEnter(index:number){
        setIsHovered(index)
     } 

     function handleMouseLeave(){
        setIsHovered(null)
     }

     function handleSectionClick(index:number){
        if(expandedIndices.includes(index)){
            const newExpandedIndices = expandedIndices.filter((i) => i !== index);
            setExpandedIndices(newExpandedIndices);
        }
        else{
            const newExpandedIndices = [...expandedIndices,index]
            setExpandedIndices(newExpandedIndices)
        }
     }

    return (
        <section>
            {text.map((text,index:number) => (
                <div key={index}>
                    <h2>{text.title}</h2>
                </div>
            ))}

        </section>
    )
}