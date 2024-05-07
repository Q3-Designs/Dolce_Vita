import react, {useState} from 'react'


interface Props {
    text: {
        title:string,
        description: string
    }[],
    hasIntro:boolean,
    intro?: string | null,
    description?: string | null
}

const Accordion: React.FC<Props> = ({text,
hasIntro,intro,description}) => {

    const [expandedIndices, setExpandedIndices] =
    useState<number[]>([])

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
        <>
        {hasIntro && (
            <div>
            <h1>{intro}</h1>
            <p className='text-left pl-4 pr-5 mt-5
            sm:w-[70vw] max-w-[900px]'>{description}</p>
            </div>
        )}
        <section className='mt-[5rem]'>
            {text.map((text,index:number) => (
                <div key={index}
                onClick={()=>handleSectionClick(index)}
                className={`border-b-4 border-blue-400 p-3 mb-3 transition-all
                hover:bg-blue-400 hover:rounded-lg max-w-[700px]
                flex flex-col justify-center items-center ${expandedIndices.includes(index) ? 'bg-blue-400 rounded-lg' : ''}`}>
                    <h2 className='mb-3 mr-auto pl-4'
                    >{text.title}</h2>
                    <p   onClick={()=>handleSectionClick(index)}
                    className={`transition-all
                     duration-500 bg-blue-500 text-left
                      w-[80vw] transition-none pl-5 pr-5 rounded-md
                      sm:w-[50vw]  max-w-[700px]
                   
                     ${expandedIndices.includes(index) ?
                         'h-[250px] overflow-scroll pt-4' : 'h-[0px] overflow-hidden text-blue-200 pt-0'}`}
                    >{text.description}</p>
                </div>
            ))}

        </section>
        </>
    )
}

export default Accordion