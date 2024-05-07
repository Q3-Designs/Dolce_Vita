import React,{useState, useEffect} from "react";
import './hydroList.css'

interface Props {
    text:string,
    intro:string
}

const HydroList:React.FC<Props> = ({text,intro}) => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const [isHovered, setIsHovered] = useState(null)

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 865);

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 865);
       
      };
  
      // Add event listener for window resize
      window.addEventListener("resize", handleResize);
  
      // Initial check when the component mounts
      handleResize();
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);



    const handleMouseEnter = (index) => {
        setIsHovered(index)
    }

    const handleMouseLeave = () => {
        setIsHovered(null)
    }

    const handleContentClick = (index) => {
       if(index === expandedIndex){
        setExpandedIndex(null)
       }
       else{
        setExpandedIndex(index)
       }   
      };


      const hydroStyle = (index) => {
        const hovered = isHovered === index

        return (
            {
                backgroundColor: hovered ? 'rgba(48, 115, 160)' : null,
               
                transition: 'all 0.3s ease-in',
                borderBottom: hovered ? null : '2px solid rgb(22, 8, 103)',
                border: hovered? '2px solid rgb(22, 8, 103)' : null,

            }
        )
      }



      const contentStyle = (index:number, description:string) => {
        const isExpanded = expandedIndex === index;
        
        // Calculate height based on the number of words in the description
        const words = description.split(/\s+/).length;
        const lineHeight = 50; // Height per line (adjust according to your design)
        const maxHeight = 300; // Maximum height for the description box
        
        let height = Math.min((words / 15) * lineHeight , maxHeight) + 'px';
      
        return {
          height: isExpanded ? '200px ' : '0 ',
          transition: isExpanded
            ? 'height 0.5s ease-in, opacity 0.5s ease-in, padding 0.01s ease-in'
            : 'height 0.3s ease-in, opacity 0.5s ease-in 0.3s,  padding 0.01s ease-in',
          overflow: isExpanded ? 'scroll' : 'hidden',
          paddingTop: isExpanded ?'2rem' : 0,
         
          paddingBottom:'0',
          marginBottom:0
        };
      };
      
      
    
      

    return (
        <>

        <div className="hydro-wrapper"
         
>

<h2 style={{
    marginLeft:'1rem',
    color:'white'
}}></h2>

              <p className="docs-intro"
              style={{
               
                height: window.innerWidth >= 865 ? 'min-content' : 'auto',
                fontWeight:'400',
                padding:0,
                // backgroundColor:'red',
                // marginBottom:'4rem',
                // marginTop:'3rem',
                // maxHeight:'320px'
              }}>
            We take a disciplined and creative approach to making websites and care deeply about
   the end result and ensuring your website gives you the best probability of success.
   <br/>Here are some the key advantages to us building your website
           </p>

    
   
        <div className="hydrolist-container">

            <div className="hydro-list"
               >
               {text.map((text,index) => (
                <div className="hydro-element"
                key={index}
                onClick={()=>handleContentClick(index)}
                style={hydroStyle(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                >

<div className="name-logo-box">
              <h2>{text.name}</h2>
              <div className="plus-minus">
              
              <div
                className={`hydro-line ${expandedIndex === (index) ? "clicked" : ""}`}
              />
                 <div
                className={`hydro-line ${expandedIndex === (index)  ? "clicked" : ""}`}
             />
              
              </div>
            </div>

            

     
                     
<section className="hydro-expanded"
 style={contentStyle(index,text.description)}>


                  <p
                  className=""
                 
                >
                    {text.description}
                  </p>
                 
                  </section>
                       

                             
                  
                    </div>

               ))}



            </div>
        </div>
        </div>
        </>
    )
}

export default HydroList