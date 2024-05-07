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
                <div key={index}
                className=''>
                    <h2 className='mb-3'
                    onClick={()=>handleSectionClick(index)}>{text.title}</h2>
                    <p   onClick={()=>handleSectionClick(index)}
                    className={` transition-[height] duration-500   pl-3 pr-3 rounded-md
                     ${expandedIndices.includes(index) ?
                         'h-[150px] overflow-scroll bg-blue-600 pt-4' : 'h-[0px] overflow-hidden text-blue-200 pt-0'}`}
                    >{text.description}</p>
                </div>
            ))}

        </section>
    )
}

export default Accordion