
import {MyProjectData} from '../assets/asstes'

export default function MyProject() {
  return (
    <div className="w-full mt-5 sm:pl-10 relative ">
        <div id="project-head">
            <h1 className='text-3xl sm:text-5xl md:text-6xl mb-10 mt-10'>My Projects</h1>
        </div>
        
        <div className="h-screen w-full  relative flex flex-col sm:flex-row items-center justify-center gap-10">
            {
                MyProjectData.map((curValue, indx) =>{
                    // return <MyProjectCard key={indx} data ={curValue}/>  
                    return <div className={`flex flex-col items-center justify-center gap-4 px-4 py-6 w-[350px]
                        h-[400px] xl:h-fit border-2 rounded  border-[#30C1BA] transition-all 
                        hover:translate-x-[-4px] hover:translate-y-[-4px]
                        shadow-lg hover:shadow-emerald-300 
                        xl:absolute ${indx == 0? "xl:top-[10px] xl:left-[172px]" : "xl:bottom-[200px] xl:right-[132px]"}
                        `} key={indx}>
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
                })
            }

        </div>
        <div id="st1" className="h-1 xl:w-[200px] bg-lime-300 absolute xl:top-[250px] xl:left-[560px]"></div>
        <div id="st2" className="h-1 xl:w-[200px] bg-lime-300 absolute xl:bottom-[350px] xl:right-[480px]"></div>
        <div id="outer-line" className="h-screen w-full grid place-items-center absolute top-14">
            <div id="main-line" className="h-1 xl:w-[50vw] bg-lime-300 rotate-90 "></div>
        </div>
    </div>
  )
}
