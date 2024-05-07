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
        <section className='mt-[5rem]'>
            {text.map((text,index:number) => (
                <div key={index} 
                className='border-b-4 border-blue-400  mb-3 transition-all
                hover:bg-blue-200'>
                    <h2 className='mb-3 text-left'
                    onClick={()=>handleSectionClick(index)}>{text.title}</h2>
                    <p   onClick={()=>handleSectionClick(index)}
                    className={` transition-all duration-500 text-left w-[80vw] pl-5 pr-5 rounded-md
                     ${expandedIndices.includes(index) ?
                         'h-[250px] overflow-scroll bg-blue-600 pt-4' : 'h-[0px] overflow-hidden text-blue-200 pt-0'}`}
                    >{text.description}</p>
                </div>
            ))}

        </section>
    )
}

export default Accordion