import React from "react";
import { Link } from "react-router-dom";
import dark from '../../media/ravenna/dark-ravenna.png'


interface Props {
    image:string,
    title:string,
    description:string

}

const Closer: React.FC<Props> = ({image,title,description}) => {

    return (
        <section style={{
            backgroundImage:`url(${dark})`
        }}
        className={`w-screen text-white h-[600px]
        relative flex flex-col items-center justify-center
        `}
  
        >
            <div className="-mt-12">
            <h1>Closing Statment</h1>
          
            <p className="mt-4 text-left pl-4 pr-4
            max-w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia sunt laborum natus illum. Laboriosam quae, nihil temporibus aliquid assumenda quo quam vitae maiores obcaecati possimus facilis beatae aspernatur odit?</p>

            <Link to='booking'>
                <button className="mt-4">
                    Contact Now
                </button>
            </Link>
            </div>
        </section>
    )
}

export default Closer