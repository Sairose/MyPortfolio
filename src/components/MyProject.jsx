
import {MyProjectData} from '../assets/asstes'

export default function MyProject() {
  return (
    <div className="w-full mt-5 sm:pl-10  ">
        <div id="project-head">
            <h1 className='text-3xl sm:text-5xl md:text-6xl mb-10 mt-10'>My Projects</h1>
        </div>
        
        <div className="h-auto w-full flex lg:flex-col items-center justify-center gap-10 lg:gap-0 flex-wrap ">
            {
                MyProjectData.map((curValue, indx) =>{
                    // return <MyProjectCard key={indx} data ={curValue}/>  
                    return <div key={indx} className= 'lg:odd:border-r-2 lg:odd:translate-x-[-49.6%] lg:even:border-l-2 lg:even:translate-x-[50%] lg:border-indigo-500 lg:px-10 lg:relative lg:before:content-[""] lg:before:h-1 lg:before:w-[40px] lg:before:bg-indigo-500 lg:before:absolute lg:before:top-[50%] lg:odd:before:right-0 lg:even:before:left-0 '>
                            <div id="inner-div" className='w-[340px] sm:w-[400px] max-h-[500px] border-2 border-gray-500 p-3 rounded-2xl'>
                            <div>
                                <h3 className="text-2xl ">Project: {curValue.project}</h3>
                            </div>
                            <div>
                                <p>{curValue.description}</p>
                            </div>
                            <div>
                                <a href= {curValue.codeLink} target='_blank'>
                                    <p className='text-blue-500'>{curValue.codeLink}</p>
                                </a>
                            </div>
                        </div>
                        </div>
                })
            }

        </div>
        
    </div>
  )
}
