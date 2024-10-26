import React from 'react'

export default function MyProjectCard({data}) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 w-[380px] 
        h-[550px] border-2 rounded  border-[#30C1BA] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]
        shadow-lg hover:shadow-emerald-300 ">
            <div>
                <img src={data.image} alt=""
                    className="h-[200px] sm:h-[300px] object-cover"
                />
            </div>
            <div>
                <h3 className="text-2xl ">Project: {data.project}</h3>
            </div>
            <div>
                <p>{data.description}</p>
            </div>
            <div>
                <a href= {data.codeLink} target='_blank'>
                    <p className='text-blue-500'>{data.codeLink}</p>
                </a>
            </div>
        </div>
    )
}
